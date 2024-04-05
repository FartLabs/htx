import type { SlotProps } from "@fartlabs/ht/slot";
import { slot as render } from "@fartlabs/ht/slot";

export type { SlotProps };

/**
 * Slot renders the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Element/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/slot>
 */
export function Slot(props: SlotProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
