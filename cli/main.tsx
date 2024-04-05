import { A, Body, H1, P } from "../mod.ts";

// deno run -A cli/main.tsx
//
if (import.meta.main) {
  const html = (
    <Body>
      <H1>Hello, World!</H1>
      <P>This is a paragraph.</P>
      <A href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</A>
    </Body>
  );

  Deno.writeTextFileSync("./cli/index.html", html);
}
