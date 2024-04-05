import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { tt as render } from "@fartlabs/ht/tt";

export type { GlobalAttributes };

/**
 * Tt renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Element/tt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tt>
 * @deprecated
 */
export function Tt(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
