import type { BlockquoteElementProps } from "@fartlabs/ht/blockquote";
import { blockquote as render } from "@fartlabs/ht/blockquote";

export type { BlockquoteElementProps };

/**
 * BLOCKQUOTE component renders the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/blockquote>
 */
export function BLOCKQUOTE(
  props: BlockquoteElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
