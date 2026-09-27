// The web app manifest. Written as a route rather than through Next's
// `manifest.ts` convention because that convention injects its own
// <link rel="manifest">, without the project page's base path.
import { withBase } from "@/lib/paths";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

/** Installed on a phone home screen: ink ground, the trifork icon. */
const manifest = {
  name: SITE_NAME,
  short_name: SITE_NAME,
  description: SITE_DESCRIPTION,
  start_url: withBase("/"),
  scope: withBase("/"),
  display: "standalone",
  background_color: "#16130F",
  theme_color: "#16130F",
  icons: [
    { src: withBase("/icon-192.png"), sizes: "192x192", type: "image/png" },
    { src: withBase("/icon-512.png"), sizes: "512x512", type: "image/png" },
    { src: withBase("/icon-maskable-512.png"), sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
};

export function GET() {
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "content-type": "application/manifest+json" },
  });
}
