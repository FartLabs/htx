import type { BlockquoteProps } from "@fartlabs/ht/blockquote";
import { blockquote as render } from "@fartlabs/ht/blockquote";

export type { BlockquoteProps };

/**
 * Blockquote renders the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/blockquote>
 */
export function Blockquote(
  props: BlockquoteProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
