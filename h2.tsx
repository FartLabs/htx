import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { h2 as render } from "@fartlabs/ht/h2";

export type { GlobalAttributes };

/**
 * H2 renders the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H2(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
