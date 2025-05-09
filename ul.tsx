import type { UlElementProps } from "@fartlabs/ht/ul";
import { ul as render } from "@fartlabs/ht/ul";

export type { UlElementProps };

/**
 * UL component renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul>
 */
export function UL(props:
  & (UlElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
