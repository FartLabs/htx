import type { FrameElementProps } from "@fartlabs/ht/frame";
import { frame as render } from "@fartlabs/ht/frame";

export type { FrameElementProps };

/**
 * FRAME component renders the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frame) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frame>
 * @deprecated
 */
export function FRAME(
  props: FrameElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
