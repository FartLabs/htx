import type { H6ElementProps } from "@fartlabs/ht/h6";
import { h6 as render } from "@fartlabs/ht/h6";

export type { H6ElementProps };

/**
 * H6 component renders the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H6(
  props: H6ElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
