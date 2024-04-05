import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { h1 as render } from "@fartlabs/ht/h1";

export type { GlobalAttributes };

/**
 * H1 renders the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H1(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
