import type { FigcaptionElementProps } from "@fartlabs/ht/figcaption";
import { figcaption as render } from "@fartlabs/ht/figcaption";

export type { FigcaptionElementProps };

/**
 * FIGCAPTION component renders the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption>
 */
export function FIGCAPTION(
  props: FigcaptionElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
