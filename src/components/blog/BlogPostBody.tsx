import Link from "next/link";
import type { BlogBlock } from "@/content/blog-posts";

export function BlogPostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="pt-4 text-2xl font-semibold text-foreground">
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if ("link" in block && block.link) {
          return (
            <p key={index}>
              {block.text}{" "}
              <Link href={block.link.href} className="text-primary hover:underline">
                {block.link.label}
              </Link>
              {block.after}
            </p>
          );
        }

        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
