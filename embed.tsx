import type { EmbedProps } from "@fartlabs/ht/embed";
import { embed as render } from "@fartlabs/ht/embed";

export type { EmbedProps };

/**
 * Embed renders the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/embed>
 */
export function Embed(
  props: EmbedProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
