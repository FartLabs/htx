import type { BigElementProps } from "@fartlabs/ht/big";
import { big as render } from "@fartlabs/ht/big";

export type { BigElementProps };

/**
 * BIG component renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big>
 * @deprecated
 */
export function BIG(
  props: BigElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
