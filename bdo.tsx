import type { BdoElementProps } from "@fartlabs/ht/bdo";
import { bdo as render } from "@fartlabs/ht/bdo";

export type { BdoElementProps };

/**
 * BDO component renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/bdo>
 */
export function BDO(
  props: BdoElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
