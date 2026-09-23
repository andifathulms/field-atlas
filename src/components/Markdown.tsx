import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

/**
 * Renders content Markdown with KaTeX math. Internal links (`/math/...`) go
 * through next/link so they pick up the base path. `#tp-` links are figure
 * mentions and get their own style.
 */
export function Markdown({ children, inline = false }: { children: string; inline?: boolean }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        // Only set when inline: a present-but-undefined key would replace <p>.
        ...(inline ? { p: ({ children }: { children?: React.ReactNode }) => <>{children}</> } : {}),
        a: ({ href = "", children }) => {
          const className = href.includes("#tp-") ? "figure-link" : "ink-link";
          if (href.startsWith("/")) {
            return (
              <Link href={href} className={className}>
                {children}
              </Link>
            );
          }
          if (href.startsWith("#")) {
            return (
              <a href={href} className={className}>
                {children}
              </a>
            );
          }
          return (
            <a href={href} className={className} target="_blank" rel="noreferrer">
              {children}
            </a>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
