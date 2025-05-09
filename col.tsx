import type { ColElementProps } from "@fartlabs/ht/col";
import { col as render } from "@fartlabs/ht/col";

export type { ColElementProps };

/**
 * COL component renders the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col>
 */
export function COL(props:
  & (ColElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
