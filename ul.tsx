import type { UlElementProps } from "@fartlabs/ht/ul";
import { ul as render } from "@fartlabs/ht/ul";

export type { UlElementProps };

/**
 * UL component renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Element/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ul>
 */
export function UL(
  props: UlElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
