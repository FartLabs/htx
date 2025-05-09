import type { NoscriptElementProps } from "@fartlabs/ht/noscript";
import { noscript as render } from "@fartlabs/ht/noscript";

export type { NoscriptElementProps };

/**
 * NOSCRIPT component renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript>
 */
export function NOSCRIPT(props:
  & (NoscriptElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
