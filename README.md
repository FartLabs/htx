# [@fartlabs/htx](https://jsr.io/@fartlabs/htx)

[![GitHub Actions][GitHub Actions badge]][GitHub Actions]

Render HTML components with JSX.

## API documentation

Generated API documentation is available at <https://jsr.io/@fartlabs/htx>.

## Getting started

### Deno

Let's learn how to get started with rtx by creating a simple router in Deno.

1\. [Install Deno](https://docs.deno.com/runtime/manual).

2\. Start a new Deno project.

```sh
deno init
```

3\. Add `@fartlabs/jsonx` and `@fartlabs/htx` as project dependencies.

```sh
deno add @fartlabs/jsonx @fartlabs/htx
```

4\. Add the following values to your `deno.json(c)` file.

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@fartlabs/jsonx"
  }
}
```

5\. Add a file ending in `.[j|t]sx` to your project. For example, `main.tsx`.

```tsx
import { a } from "@fartlabs/htx";

const html = <a href="https://example.com">Hello, world!</a>;

Deno.writeTextFileSync("index.html", html);
```

6\. Compile your HTML by running the `.[j|t]sx` file.

```sh
deno run --allow-net main.tsx
```

Resulting `index.html`:

```html
<a href="https://example.com">Hello, world!</a>
```

## Contribute

### Style

Run `deno fmt` to format the code.

Run `deno lint` to lint the code.

---

Developed with ❤️ [**@FartLabs**](https://github.com/FartLabs)

[JSR]: https://jsr.io/@fartlabs/htx
[JSR badge]: https://jsr.io/badges/@fartlabs/htx
[JSR score]: https://jsr.io/@fartlabs/htx/score
[JSR score badge]: https://jsr.io/badges/@fartlabs/htx/score
[GitHub Actions]: https://github.com/FartLabs/htx/actions/workflows/check.yaml
[GitHub Actions badge]: https://github.com/FartLabs/htx/actions/workflows/check.yaml/badge.svg
