import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { wbr as render } from "@fartlabs/ht/wbr";

export type { GlobalAttributes };

/**
 * Wbr renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/wbr>
 */
export function Wbr(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
