import type { UlProps } from "@fartlabs/ht/ul";
import { ul as render } from "@fartlabs/ht/ul";

export type { UlProps };

/**
 * Ul renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Element/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ul>
 */
export function Ul(props: UlProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
