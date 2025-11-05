import type { PElementProps } from "@fartlabs/ht/p";
import { p as render } from "@fartlabs/ht/p";

export type { PElementProps };

/**
 * P component renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p>
 */
export function P(props:
  & (PElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
