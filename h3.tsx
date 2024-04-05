import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { h3 as render } from "@fartlabs/ht/h3";

export type { GlobalAttributes };

/**
 * H3 renders the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H3(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
