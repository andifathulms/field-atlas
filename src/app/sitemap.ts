import type { MetadataRoute } from "next";
import { getFields } from "@/lib/content";
import { DOMAINS } from "@/lib/domains";
import { fieldPath } from "@/lib/paths";
import { absoluteUrl } from "@/lib/site";

/** Every page the atlas publishes, for crawlers and link previews. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...DOMAINS.map((d) => `/${d.id}/`),
    ...getFields().map((f) => fieldPath(f.domain, f.id)),
    "/crossings/",
    "/people/",
    "/toolkit/",
    "/open-problems/",
    "/search/",
  ];
  return paths.map((path) => ({ url: absoluteUrl(path), changeFrequency: "monthly" }));
}
