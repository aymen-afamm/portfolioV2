import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/language-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic' });

export const metadata: Metadata = {
  metadataBase: new URL('https://aymenzagnouni.dev'),
  title: {
    default: 'Aymen Zagnouni — Engineering Ideas Into Digital Reality',
    template: '%s | Aymen Zagnouni',
  },
  description:
    'Multidisciplinary technology developer — mobile apps, web, connected systems, electronics, robotics and technical education.',
  keywords: [
    'Aymen Zagnouni',
    'mobile developer',
    'Flutter',
    'Kotlin',
    'Android',
    'IoT',
    'smart home',
    'robotics',
    'STEM education',
    'Morocco',
  ],
  openGraph: {
    type: 'website',
    title: 'Aymen Zagnouni — Engineering Ideas Into Digital Reality',
    description:
      'Multidisciplinary technology developer — mobile apps, web, connected systems, electronics, robotics and technical education.',
    siteName: 'Aymen Zagnouni',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aymen Zagnouni — Engineering Ideas Into Digital Reality',
    description:
      'Multidisciplinary technology developer — mobile apps, web, connected systems, electronics, robotics and technical education.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansArabic.variable} font-sans bg-ink text-paper`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
