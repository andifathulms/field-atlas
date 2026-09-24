/** Suffixes and bracketed titles that should not decide where a name sorts. */
const SUFFIX = /\s+(Jr\.?|Sr\.?|II|III)$/;
const BRACKETS = /\s*\([^)]*\)/g;

/**
 * Sort key for a person's name: surname first, then the rest.
 * "William Thomson (Lord Kelvin)" sorts under Thomson, "Lester Ford Jr." under Ford.
 */
export function personSortKey(name: string): string {
  const clean = name.replace(BRACKETS, "").replace(SUFFIX, "").trim();
  // "Diophantus of Alexandria" sorts under Diophantus, not the place.
  const [person] = clean.split(" of ");
  const parts = person.split(/\s+/);
  const surname = parts[parts.length - 1].replace(/^al-/, "");
  return fold(`${surname} ${parts.slice(0, -1).join(" ")}`);
}

/** Strip accents and fold letters that do not decompose, so Ørsted files under O. */
function fold(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[Øø]/g, "o")
    .replace(/[Łł]/g, "l")
    .replace(/[Ææ]/g, "ae")
    .replace(/ß/g, "ss");
}

/** First year mentioned in a free-text date, for ordering ("c. 1150", "1850 – 1865"); BCE counts as negative. */
export function yearOf(date: string): number {
  const m = date.match(/\d{1,4}/);
  if (!m) return 0;
  const y = parseInt(m[0]);
  return /BCE/.test(date) ? -y : y;
}
