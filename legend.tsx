import type { LegendProps } from "@fartlabs/ht/legend";
import { legend as render } from "@fartlabs/ht/legend";

export type { LegendProps };

/**
 * Legend renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/legend>
 */
export function Legend(
  props: LegendProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
