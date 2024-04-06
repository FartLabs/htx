import type { H5ElementProps } from "@fartlabs/ht/h5";
import { h5 as render } from "@fartlabs/ht/h5";

export type { H5ElementProps };

/**
 * H5 component renders the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function H5(
  props: H5ElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
