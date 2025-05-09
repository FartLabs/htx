import type { QElementProps } from "@fartlabs/ht/q";
import { q as render } from "@fartlabs/ht/q";

export type { QElementProps };

/**
 * Q component renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q>
 */
export function Q(props: QElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
