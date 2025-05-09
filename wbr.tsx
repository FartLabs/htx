import type { WbrElementProps } from "@fartlabs/ht/wbr";
import { wbr as render } from "@fartlabs/ht/wbr";

export type { WbrElementProps };

/**
 * WBR component renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr>
 */
export function WBR(props: WbrElementProps & { children?: any } = {}): string {
  return render(props);
}
