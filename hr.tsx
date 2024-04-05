import type { HrProps } from "@fartlabs/ht/hr";
import { hr as render } from "@fartlabs/ht/hr";

export type { HrProps };

/**
 * Hr renders the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Element/hr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/hr>
 */
export function Hr(props: HrProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest);
}
