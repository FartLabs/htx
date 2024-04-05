import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { h6 as render } from "@fartlabs/ht/h6";

export type { GlobalAttributes };

/**
 * H6 renders the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H6(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
