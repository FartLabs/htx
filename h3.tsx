import type { H3ElementProps } from "@fartlabs/ht/h3";
import { h3 as render } from "@fartlabs/ht/h3";

export type { H3ElementProps };

/**
 * H3 component renders the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H3(
  props: H3ElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
