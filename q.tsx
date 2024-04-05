import type { QProps } from "@fartlabs/ht/q";
import { q as render } from "@fartlabs/ht/q";

export type { QProps };

/**
 * Q renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Element/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/q>
 */
export function Q(props: QProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
