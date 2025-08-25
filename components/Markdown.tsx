export default function Markdown({ html }: { html: string }) {
  return (
    <article
      className="prose prose-invert max-w-none prose-pre:bg-black/60 prose-code:text-hacker-green"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
