import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { bdo as render } from "@fartlabs/ht/bdo";

export type { GlobalAttributes };

/**
 * Bdo renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/bdo>
 */
export function Bdo(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
