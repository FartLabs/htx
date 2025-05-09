import type { EmbedElementProps } from "@fartlabs/ht/embed";
import { embed as render } from "@fartlabs/ht/embed";

export type { EmbedElementProps };

/**
 * EMBED component renders the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed>
 */
export function EMBED(
  props: EmbedElementProps & { children?: any } = {},
): string {
  return render(props);
}
