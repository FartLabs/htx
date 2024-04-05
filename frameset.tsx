import type { FramesetProps } from "@fartlabs/ht/frameset";
import { frameset as render } from "@fartlabs/ht/frameset";

export type { FramesetProps };

/**
 * Frameset renders the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frameset>
 * @deprecated
 */
export function Frameset(
  props: FramesetProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
