import type { FrameProps } from "@fartlabs/ht/frame";
import { frame as render } from "@fartlabs/ht/frame";

export type { FrameProps };

/**
 * Frame renders the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Element/frame) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frame>
 * @deprecated
 */
export function Frame(
  props: FrameProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
