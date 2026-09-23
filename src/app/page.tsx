import Link from "next/link";
import { Legend } from "@/components/Legend";
import { getFields } from "@/lib/content";
import { DOMAINS } from "@/lib/domains";
import { surveySummary } from "@/lib/stats";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-8">
      <section className="settle pb-16 pt-16 sm:pt-24">
        <p className="stamp text-ink-faint">A narrative atlas · v1 survey</p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          How fields of knowledge branched, and where the map runs out.
        </h1>
        <p className="mt-8 max-w-prose text-lg text-ink-soft">
          Each field here earns a page by answering one question: what forced it to split off
          from what came before? The atlas follows the dated turning points (proofs, crises,
          reformulations) that drew each boundary. It also marks, as honestly as it can, the
          problems no one has solved yet.
        </p>
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
                  className="group grid gap-x-8 gap-y-2 py-8 sm:grid-cols-[6rem_minmax(0,1fr)_14rem] sm:items-baseline"
                >
                  <span className="stamp text-ink-faint">
                    {String(i + 1).padStart(2, "0")} · {charted ? "Charted" : "Unsurveyed"}
                  </span>
                  <span>
                    <span
                      className={`block text-3xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl ${
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

      <section className="mt-16 border-t border-rule pt-6">
        <h2 className="stamp mb-4 text-ink-faint">Reading the map</h2>
        <div data-domain="math">
          <Legend />
        </div>
      </section>
    </main>
  );
}
