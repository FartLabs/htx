import type { DfnElementProps } from "@fartlabs/ht/dfn";
import { dfn as render } from "@fartlabs/ht/dfn";

export type { DfnElementProps };

/**
 * DFN component renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dfn>
 */
export function DFN(
  props: DfnElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
