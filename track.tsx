import type { TrackProps } from "@fartlabs/ht/track";
import { track as render } from "@fartlabs/ht/track";

export type { TrackProps };

/**
 * Track renders the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/track>
 */
export function Track(
  props: TrackProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
