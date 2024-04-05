import type { VideoProps } from "@fartlabs/ht/video";
import { video as render } from "@fartlabs/ht/video";

export type { VideoProps };

/**
 * Video renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Element/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/video>
 */
export function Video(
  props: VideoProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
