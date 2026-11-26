import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-ink text-paper">
      <div className="text-center px-6">
        <p className="font-display text-7xl font-medium text-brass">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-fog">Cette page n’existe pas. / This page does not exist. / هذه الصفحة غير موجودة.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-paper px-6 py-3 font-medium text-ink hover:bg-brass transition-colors"
        >
          ← Aymen Zagnouni
        </Link>
      </div>
    </main>
  );
}
