// Page metadata in one shape: canonical URL, Open Graph and Twitter tags all
// absolute (a relative og:image is ignored by most unfurlers), each pointing
// at the page's own card under /og/.
import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "./site";

export interface PageMeta {
  title: string;
  description: string;
  /** Root-relative page path, with its trailing slash. */
  path: string;
  /** Card slug under /og/, without the .png. */
  card: string;
}

export function pageMetadata({ title, description, path, card }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(`/og/${card}.png`);
  // The page title template only applies to <title>; social titles carry the
  // site name themselves so a shared card reads on its own.
  const social = title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;
  return {
    // The landing page is the one title the "%s · Field Atlas" template
    // would otherwise double up.
    title: title === SITE_NAME ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title: social,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: social,
      description,
      images: [image],
    },
  };
}
