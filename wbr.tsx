import type { WbrElementProps } from "@fartlabs/ht/wbr";
import { wbr as render } from "@fartlabs/ht/wbr";

export type { WbrElementProps };

/**
 * WBR component renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/wbr>
 */
export function WBR(
  props: WbrElementProps & { children?: string[] } = {},
): string {
  return render(props);
}
