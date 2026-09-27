// Social cards, rendered to PNG at build time. The slug ends in ".png" so the
// static export writes a real image file — GitHub Pages serves files by
// extension, and an extensionless one would arrive as a download.
import { cardFor, cardSlugs } from "@/lib/ogCards";
import { ogImage } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return cardSlugs().map((slug) => ({ slug: `${slug}.png`.split("/") }));
}

export function GET(_request: Request, { params }: { params: { slug: string[] } }) {
  const slug = params.slug.join("/").replace(/\.png$/, "");
  const card = cardFor(slug);
  if (!card) return new Response("Not found", { status: 404 });
  return ogImage(card);
}
