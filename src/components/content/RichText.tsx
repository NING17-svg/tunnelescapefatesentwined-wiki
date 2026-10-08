import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Preserve the Writer's Markdown structure without executing embedded HTML. */
export function RichText({ text, inline = false }: { text: string; inline?: boolean }) {
  return (
    <div className={inline ? "rich-inline" : "rich-text"}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        allowedElements={inline ? ["p", "a", "strong", "em", "code", "del", "br"] : undefined}
        unwrapDisallowed
        components={{
          h1: ({ children }) => <h3>{children}</h3>,
          h2: ({ children }) => <h3>{children}</h3>,
          table: ({ children }) => <div className="table-scroll"><table className="data-table">{children}</table></div>,
          img: ({ alt }) => <span>{alt}</span>,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
