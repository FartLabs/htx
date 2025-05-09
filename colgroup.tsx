import type { ColgroupElementProps } from "@fartlabs/ht/colgroup";
import { colgroup as render } from "@fartlabs/ht/colgroup";

export type { ColgroupElementProps };

/**
 * COLGROUP component renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup>
 */
export function COLGROUP(
  props: ColgroupElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
