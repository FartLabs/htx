import type { CanvasProps } from "@fartlabs/ht/canvas";
import { canvas as render } from "@fartlabs/ht/canvas";

export type { CanvasProps };

/**
 * Canvas renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/canvas>
 */
export function Canvas(
  props: CanvasProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
