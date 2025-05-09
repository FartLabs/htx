import type { LegendElementProps } from "@fartlabs/ht/legend";
import { legend as render } from "@fartlabs/ht/legend";

export type { LegendElementProps };

/**
 * LEGEND component renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend>
 */
export function LEGEND(props:
  & (LegendElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
