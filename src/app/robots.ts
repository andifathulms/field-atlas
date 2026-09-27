import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(SITE_URL ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
