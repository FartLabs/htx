import type { VideoElementProps } from "@fartlabs/ht/video";
import { video as render } from "@fartlabs/ht/video";

export type { VideoElementProps };

/**
 * VIDEO component renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video>
 */
export function VIDEO(
  props: VideoElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
