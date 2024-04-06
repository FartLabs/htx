import type { EmbedElementProps } from "@fartlabs/ht/embed";
import { embed as render } from "@fartlabs/ht/embed";

export type { EmbedElementProps };

/**
 * EMBED component renders the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/embed>
 */
export function EMBED(
  props: EmbedElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
