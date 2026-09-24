import Link from "next/link";
import { Legend } from "@/components/Legend";
import { getCrossings, getFields } from "@/lib/content";
import { DOMAINS } from "@/lib/domains";
import { SurveyPlate } from "@/components/SurveyPlate";
import { ThreadAtlas } from "@/components/ThreadAtlas";
import { surveySummary } from "@/lib/stats";

export default function Home() {
  const crossings = getCrossings();
  const total = surveySummary(getFields());
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <section className="grid items-center gap-x-16 gap-y-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_25rem]">
        <div className="settle">
          <p className="stamp text-ink-faint">A narrative atlas · {DOMAINS.length} domains surveyed</p>
          <h1 className="mt-5 max-w-3xl text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.02em] sm:text-6xl lg:text-[4.25rem]">
            How fields of knowledge branched, and where the map{" "}
            <span className="italic text-ink-soft">runs out.</span>
          </h1>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink-soft sm:text-xl">
            Each field here earns a page by answering one question: what forced it to split off
            from what came before? The atlas follows the dated turning points (proofs, crises,
            reformulations) that drew each boundary. It also marks, as honestly as it can, the
            problems no one has solved yet.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-x-6 border-t border-rule pt-6 sm:flex sm:gap-x-12">
            {[
              [total.fields, "fields charted"],
              [total.turningPoints, "turning points"],
              [total.unresolved, "unresolved problems"],
            ].map(([n, label], i) => (
              <div key={label} className={`flex flex-col-reverse ${i === 2 ? "text-ink-faint" : ""}`}>
                <dt className="stamp mt-1 text-ink-faint">{label}</dt>
                <dd className="text-3xl font-semibold tracking-tight [font-variant-numeric:lining-nums]">{n}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/math/"
              className="stamp group inline-flex items-center gap-3 bg-ink px-5 py-3.5 text-paper transition-colors duration-200 hover:bg-math"
            >
              Open the first survey
              <span aria-hidden className="transition-transform duration-300 ease-house group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link href="/crossings/" className="stamp ink-link text-ink-soft">
              Or see where domains cross
            </Link>
          </div>
        </div>
        <SurveyPlate className="settle mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none [animation-delay:150ms]" />
      </section>

      <section aria-labelledby="atlas-heading" className="border-t border-ink pb-16">
        <h2 id="atlas-heading" className="stamp py-4 text-ink-faint">
          The atlas at a glance
        </h2>
        <p className="max-w-prose text-ink-soft">
          Every thread on one circle. Fields rarely stay inside their own thread: a solid line means a field
          grew from a parent in another thread, and a dashed line means a result from one domain was put to
          use in another. Select a thread to open its map.
        </p>
        <div className="survey-grid mt-8 border border-rule px-2 py-6 sm:px-6">
          <ThreadAtlas />
        </div>
      </section>

      <section aria-labelledby="domains-heading" className="border-t border-ink">
        <h2 id="domains-heading" className="stamp py-4 text-ink-faint">
          Domains
        </h2>
        <ol>
          {DOMAINS.map((d, i) => {
            const fields = getFields(d.id);
            const charted = fields.length > 0;
            const s = surveySummary(fields);
            return (
              <li
                key={d.id}
                data-domain={d.id}
                className={`settle border-t ${charted ? "border-rule" : "border-dashed border-rule"}`}
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                <Link
                  href={`/${d.id}/`}
                  className="group relative -mx-4 grid gap-x-8 gap-y-2 px-4 py-9 transition-colors duration-300 hover:bg-paper-deep/60 sm:-mx-6 sm:grid-cols-[8rem_minmax(0,1fr)_14rem] sm:items-baseline sm:px-6"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-500 ease-house group-hover:scale-y-100"
                  />
                  <span className="stamp text-ink-faint sm:pt-3">
                    {String(i + 1).padStart(2, "0")} · {charted ? "Charted" : "Unsurveyed"}
                  </span>
                  <span>
                    <span
                      className={`block text-4xl font-semibold tracking-tight transition-colors duration-300 sm:text-5xl ${
                        charted ? "text-accent" : "text-fog"
                      }`}
                    >
                      {d.name}
                      <span
                        aria-hidden
                        className="ml-3 inline-block translate-x-0 text-2xl transition-transform duration-300 ease-house group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                    <span className={`mt-2 block max-w-prose ${charted ? "text-ink-soft" : "italic text-fog"}`}>
                      {d.blurb}
                    </span>
                  </span>
                  {charted ? (
                    <span className="stamp flex flex-col gap-1 text-ink-soft sm:text-right">
                      <span>{s.fields} fields</span>
                      <span>{s.turningPoints} turning points</span>
                      <span>{s.unresolved} unresolved problems</span>
                    </span>
                  ) : (
                    <span className="stamp text-fog sm:text-right">Reserved for width phase</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="crossings-heading" className="border-t border-ink">
        <Link
          href="/crossings/"
          className="group -mx-4 grid gap-x-8 gap-y-2 px-4 py-9 transition-colors duration-300 hover:bg-paper-deep/60 sm:-mx-6 sm:grid-cols-[8rem_minmax(0,1fr)_14rem] sm:items-baseline sm:px-6"
        >
          <span className="stamp text-ink-faint sm:pt-3">Across</span>
          <span>
            <span id="crossings-heading" className="block text-4xl font-semibold tracking-tight sm:text-5xl">
              Crossings
              <span
                aria-hidden
                className="ml-3 inline-block text-2xl transition-transform duration-300 ease-house group-hover:translate-x-1"
              >
                →
              </span>
            </span>
            <span className="mt-2 block max-w-prose text-ink-soft">
              Where a result in one domain lands in another: geometry becoming gravity, physics revealing the
              double helix.
            </span>
          </span>
          <span className="stamp flex flex-col gap-1 text-ink-soft sm:text-right">
            <span>{crossings.links.length} linked crossings</span>
            <span className="text-fog">{crossings.seeds.length} reaching unmapped ground</span>
          </span>
        </Link>
      </section>

      <section className="mt-16 border-t border-rule pt-6">
        <h2 className="stamp mb-4 text-ink-faint">Reading the map</h2>
        <div data-domain="math">
          <Legend />
        </div>
      </section>
    </main>
  );
}
