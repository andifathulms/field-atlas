import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <section className="fog-field settle mt-16 flex min-h-[22rem] items-center justify-center border border-dashed border-rule px-6 py-16 text-center">
        <div className="max-w-md">
          <p className="stamp text-fog">404 · Off the map</p>
          <p className="mt-4 text-2xl italic text-ink-faint">This page is not on any survey.</p>
          <Link href="/" className="stamp ink-link mt-8 inline-block text-ink-soft">
            Return to the atlas →
          </Link>
        </div>
      </section>
    </main>
  );
}
