import type { H2ElementProps } from "@fartlabs/ht/h2";
import { h2 as render } from "@fartlabs/ht/h2";

export type { H2ElementProps };

/**
 * H2 component renders the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H2(
  props: H2ElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
