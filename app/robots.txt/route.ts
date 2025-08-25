export function GET() {
  return new Response(
`# hint: /root (pass: ramiro)
User-agent: *
Allow: /`,
    { headers: { "content-type": "text/plain" } }
  );
}
