import type { ColgroupElementProps } from "@fartlabs/ht/colgroup";
import { colgroup as render } from "@fartlabs/ht/colgroup";

export type { ColgroupElementProps };

/**
 * COLGROUP component renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup>
 */
export function COLGROUP(
  props: ColgroupElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
