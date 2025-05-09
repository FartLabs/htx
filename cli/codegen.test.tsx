import { assertEquals } from "@std/assert";
import { A } from "../a.tsx";

Deno.test("A anchor component", () => {
  assertEquals(
    <A href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</A>,
    '<a href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</a>',
  );
});
