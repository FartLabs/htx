import type { FigureElementProps } from "@fartlabs/ht/figure";
import { figure as render } from "@fartlabs/ht/figure";

export type { FigureElementProps };

/**
 * FIGURE component renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure>
 */
export function FIGURE(props:
  & (FigureElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
