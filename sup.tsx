import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { sup as render } from "@fartlabs/ht/sup";

export type { GlobalAttributes };

/**
 * Sup renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Element/sup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/sup>
 */
export function Sup(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
