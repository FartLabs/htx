import type { SlotElementProps } from "@fartlabs/ht/slot";
import { slot as render } from "@fartlabs/ht/slot";

export type { SlotElementProps };

/**
 * SLOT component renders the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Element/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/slot>
 */
export function SLOT(
  props: SlotElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
