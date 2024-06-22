# [@fartlabs/htx](https://jsr.io/@fartlabs/htx)

[![GitHub Actions](https://github.com/FartLabs/htx/actions/workflows/check.yaml/badge.svg)](https://github.com/FartLabs/htx/actions/workflows/check.yaml)

Render HTML components with JSX powered by Deno and
[**@fartlabs/jsonx**](https://jsr.io/@fartlabs/jsonx).

## API documentation

Generated API documentation is available at <https://jsr.io/@fartlabs/htx>.

## Getting started

### Deno

Let's learn how to get started with htx by creating a simple router in Deno.

1\. [Install Deno](https://docs.deno.com/runtime/manual).

2\. Start a new Deno project.

```sh
deno init
```

3\. Add `@fartlabs/htx` as a project dependency.

```sh
deno add @fartlabs/htx
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
deno run --allow-net main.tsx
```

Resulting `index.html`:

```html
<body><h1>Hello, World!</h1><p>This is a paragraph.</p><a href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</a></body>
```

## Contribute

### Style

Run `deno fmt` to format the code.

Run `deno lint` to lint the code.

### Code generation

Run `deno task generate` to generate the code.

---

Developed with ❤️ [**@FartLabs**](https://github.com/FartLabs)
