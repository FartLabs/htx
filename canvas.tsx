import type { CanvasElementProps } from "@fartlabs/ht/canvas";
import { canvas as render } from "@fartlabs/ht/canvas";

export type { CanvasElementProps };

/**
 * CANVAS component renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas>
 */
export function CANVAS(
  props: CanvasElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
