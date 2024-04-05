import type { ColgroupProps } from "@fartlabs/ht/colgroup";
import { colgroup as render } from "@fartlabs/ht/colgroup";

export type { ColgroupProps };

/**
 * Colgroup renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup>
 */
export function Colgroup(
  props: ColgroupProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
