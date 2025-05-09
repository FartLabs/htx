import type { HrElementProps } from "@fartlabs/ht/hr";
import { hr as render } from "@fartlabs/ht/hr";

export type { HrElementProps };

/**
 * HR component renders the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr>
 */
export function HR(props: HrElementProps & { children?: any } = {}): string {
  return render(props);
}
