import type { FigureElementProps } from "@fartlabs/ht/figure";
import { figure as render } from "@fartlabs/ht/figure";

export type { FigureElementProps };

/**
 * FIGURE component renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/figure>
 */
export function FIGURE(
  props: FigureElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
