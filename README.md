# [@fartlabs/htx](https://jsr.io/@fartlabs/htx)

[![JSR](https://jsr.io/badges/@fartlabs/htx)](https://jsr.io/@fartlabs/htx)
[![JSR score](https://jsr.io/badges/@fartlabs/htx/score)](https://jsr.io/@fartlabs/htx/score)
[![GitHub Actions](https://github.com/FartLabs/htx/actions/workflows/check.yaml/badge.svg)](https://github.com/FartLabs/htx/actions/workflows/check.yaml)

Render HTML components with JSX powered by Deno and
[**@fartlabs/jsonx**](https://jsr.io/@fartlabs/jsonx).

## API documentation

Generated API documentation is available at <https://jsr.io/@fartlabs/htx>.

## Getting started

### Deno

Let's learn how to get started with HTX by creating a simple example in Deno.

1\. [Install Deno](https://docs.deno.com/runtime/manual).

2\. Start a new Deno project.

```sh
deno init
```

3\. Add `@fartlabs/htx` as a project dependency.

```sh
deno add jsr:@fartlabs/htx
```

4\. Add the following values to your `deno.json(c)` file.

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@fartlabs/htx"
  }
}
```

5\. Add a file ending in `.[j|t]sx` to your project. For example, `main.tsx`.

```tsx
import { A, BODY, H1, P } from "@fartlabs/htx";

const html = (
  <BODY>
    <H1>Hello, World!</H1>
    <P>This is a paragraph.</P>
    <A href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</A>
  </BODY>
);

Deno.writeTextFileSync("index.html", html);
```

6\. Compile your HTML by running the `.[j|t]sx` file.

```sh
deno run --allow-write main.tsx
```

Resulting `index.html`:

```html
<body>
  <h1>Hello, World!</h1>
  <p>This is a paragraph.</p>
  <a href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</a>
</body>
```

## Examples

### Render a template to a string/file

```tsx
// main.tsx
import { A, BODY, H1, P } from "@fartlabs/htx";

const html = (
  <BODY>
    <H1>Hello</H1>
    <P>
      See <A href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</A>
    </P>
  </BODY>
);

// html is a string
await Deno.writeTextFile("index.html", html);
```

Run:

```sh
deno run -A main.tsx
```

### Pass data into components

```tsx
// greet.tsx
import { DIV, H1, P } from "@fartlabs/htx";

type GreetProps = { name: string; messages: string[] };

export function Greet(props: GreetProps) {
  const { name, messages } = props;
  return (
    <DIV>
      <H1>Hello, {name}!</H1>
      {messages.map((m) => <P>{m}</P>).join("")}
    </DIV>
  );
}

// usage.tsx
import { Greet } from "./greet.tsx";

const page = <Greet name="Ada" messages={["Welcome", "Enjoy your stay"]} />;
console.log(page); // string
```

### Integrate with a server request handler

```ts
import { BODY, H1, P } from "@fartlabs/htx";

Deno.serve((_req) => {
  const body = (
    <BODY>
      <H1>HTX Server</H1>
      <P>Rendered via JSX and returned as text/html.</P>
    </BODY>
  );
  return new Response(
    body,
    { headers: { "content-type": "text/html; charset=utf-8" } },
  );
});
```

Run:

```sh
deno run --allow-net server.ts
```

## Related projects

- [@fartlabs/ht](https://jsr.io/@fartlabs/ht) — minimal HTML tag helpers for
  Deno/TypeScript
- [@fartlabs/jsonx](https://jsr.io/@fartlabs/jsonx) — JSX runtime for
  string-first rendering

## HTX best practices

For the canonical best practices, see the HTX guide:

- HTX concepts and best practices: https://jsonx.fart.tools/concepts/htx

### HTX vs React (at a glance)

The following table contrasts HTX with React, reflecting the Mental model and
Benefits discussed in the guide linked above.

| HTX                                          | React                                     |
| -------------------------------------------- | ----------------------------------------- |
| String generation; concatenate HTML          | Virtual DOM diff and reconciliation       |
| HTML string                                  | React elements that render to DOM         |
| Direct DOM APIs (e.g., `insertAdjacentHTML`) | setState/useState with reconciliation     |
| Map and `.join("")`                          | Map elements; no manual join              |
| Ternary to empty string                      | Logical AND or ternary returning elements |
| Functions returning strings                  | Components returning elements             |
| Minimal; no VDOM                             | VDOM runtime, scheduler                   |
| First-class — strings are source of truth    | DOM/element tree is source of truth       |
| What you write is what gets rendered         | Abstractions can obscure output           |
| Inspect exact HTML strings                   | Requires inspecting component tree/DOM    |
| No VDOM overhead                             | VDOM diffing/reconciliation cost          |
| No complex state or reconciliation           | State and lifecycle management required   |

## Changelog

- See [Releases](https://github.com/FartLabs/htx/releases) for version history.

## Contribute

### Style

Run `deno fmt` to format the code.

Run `deno lint` to lint the code.

### Code generation

Run `deno task generate` to generate the code.

### Testing

Run the test suite with Deno:

```sh
deno test -A
```

### Troubleshooting

- If JSX fails to compile, ensure your `deno.json(c)` has:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@fartlabs/htx"
  }
}
```

## License

This project is licensed under the WTFPL. See [LICENSE](./LICENSE) for details.

---

Developed with ❤️ [**@FartLabs**](https://github.com/FartLabs)
