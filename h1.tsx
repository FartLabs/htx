import type { H1ElementProps } from "@fartlabs/ht/h1";
import { h1 as render } from "@fartlabs/ht/h1";

export type { H1ElementProps };

/**
 * H1 component renders the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H1(
  props: H1ElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
