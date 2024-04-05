import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { h4 as render } from "@fartlabs/ht/h4";

export type { GlobalAttributes };

/**
 * H4 renders the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H4(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
