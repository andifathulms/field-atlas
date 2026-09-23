// next/link applies basePath automatically, but raw <a> elements inside SVG
// do not. Use this for any href that is not rendered through next/link.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBase(path: string): string {
  return `${BASE_PATH}${path}`;
}

export function fieldPath(domain: string, fieldId: string): string {
  return `/${domain}/${fieldId}/`;
}
