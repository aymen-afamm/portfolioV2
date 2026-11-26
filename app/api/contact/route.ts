import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting: max 3 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; reset: number }>();

function getIP(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + 60_000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim();
}

export async function POST(req: NextRequest) {
  const ip = getIP(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a minute.' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = sanitize(String(body.name ?? ''));
  const email = sanitize(String(body.email ?? ''));
  const subject = sanitize(String(body.subject ?? ''));
  const message = sanitize(String(body.message ?? ''));

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['aymenzagnouni@gmail.com'],
          subject: `Portfolio — ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><hr/><p>${message.replace(/\n/g, '<br/>')}</p>`,
          reply_to: email,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        console.error('Resend error:', errData);
        return NextResponse.json({ error: 'Email delivery failed.' }, { status: 500 });
      }
      return NextResponse.json({ success: true, method: 'resend' });
    } catch (err) {
      console.error('Resend exception:', err);
      return NextResponse.json({ error: 'Email delivery failed.' }, { status: 500 });
    }
  }

  // Fallback: return mailto link for the client to open
  const encodedSubject = encodeURIComponent(`Portfolio — ${subject} (from ${name})`);
  const encodedBody = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
  const mailto = `mailto:aymenzagnouni@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

  return NextResponse.json({ success: true, method: 'mailto', mailto });
}
