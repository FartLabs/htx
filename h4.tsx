import type { H4ElementProps } from "@fartlabs/ht/h4";
import { h4 as render } from "@fartlabs/ht/h4";

export type { H4ElementProps };

/**
 * H4 component renders the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/Heading_Elements>
 */
export function H4(props: H4ElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
