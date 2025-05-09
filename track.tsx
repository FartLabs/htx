import type { TrackElementProps } from "@fartlabs/ht/track";
import { track as render } from "@fartlabs/ht/track";

export type { TrackElementProps };

/**
 * TRACK component renders the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track>
 */
export function TRACK(
  props: TrackElementProps & { children?: string[] } = {},
): string {
  return render(props);
}
