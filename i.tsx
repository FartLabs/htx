import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { i as render } from "@fartlabs/ht/i";

export type { GlobalAttributes };

/**
 * I renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Element/i) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/i>
 */
export function I(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
