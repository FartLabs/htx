import type { PElementProps } from "@fartlabs/ht/p";
import { p as render } from "@fartlabs/ht/p";

export type { PElementProps };

/**
 * P component renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Element/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/p>
 */
export function P(props: PElementProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
