import type { FramesetElementProps } from "@fartlabs/ht/frameset";
import { frameset as render } from "@fartlabs/ht/frameset";

export type { FramesetElementProps };

/**
 * FRAMESET component renders the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset>
 * @deprecated
 */
export function FRAMESET(
  props: FramesetElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
