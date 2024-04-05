import type { DialogProps } from "@fartlabs/ht/dialog";
import { dialog as render } from "@fartlabs/ht/dialog";

export type { DialogProps };

/**
 * Dialog renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dialog>
 */
export function Dialog(
  props: DialogProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
