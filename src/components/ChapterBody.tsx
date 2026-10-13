import { Markdown } from "@/components/Markdown";
import { withBase } from "@/lib/paths";
import type { FieldImage } from "@/lib/types";

/** A chapter image with its caption, credit and license. */
function Plate({ image }: { image: FieldImage }) {
  return (
    <figure className="plate" id={`img-${image.id}`}>
      <div className="plate-mount">
        {/* Static export: next/image would need a loader, and the files are already sized. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(image.src)}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption>
        <Markdown inline>{image.caption}</Markdown>
        <span className="plate-credit stamp">
          {image.credit} · {image.license} ·{" "}
          <a href={image.source} className="ink-link" target="_blank" rel="noreferrer">
            Source
          </a>
        </span>
      </figcaption>
    </figure>
  );
}

/** Chapter prose, split at each `{{img:id}}` line so the image sits between paragraphs. */
export function ChapterBody({ body, images }: { body: string; images: FieldImage[] }) {
  // With a capturing group, split puts each image id at the odd indices.
  const parts = body.split(/^\{\{img:([a-z0-9-]+)\}\}$/m);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 1) return <Plate key={`img-${part}`} image={images.find((img) => img.id === part)!} />;
        return part.trim() ? <Markdown key={i}>{part}</Markdown> : null;
      })}
    </>
  );
}
