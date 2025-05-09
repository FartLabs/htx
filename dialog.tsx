import type { DialogElementProps } from "@fartlabs/ht/dialog";
import { dialog as render } from "@fartlabs/ht/dialog";

export type { DialogElementProps };

/**
 * DIALOG component renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog>
 */
export function DIALOG(
  props: DialogElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
