import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { h5 as render } from "@fartlabs/ht/h5";

export type { GlobalAttributes };

/**
 * H5 renders the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H5(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
