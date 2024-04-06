import type { LegendElementProps } from "@fartlabs/ht/legend";
import { legend as render } from "@fartlabs/ht/legend";

export type { LegendElementProps };

/**
 * LEGEND component renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/legend>
 */
export function LEGEND(
  props: LegendElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
