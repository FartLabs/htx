import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { rb as render } from "@fartlabs/ht/rb";

export type { GlobalAttributes };

/**
 * Rb renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Element/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rb>
 * @deprecated
 */
export function Rb(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
