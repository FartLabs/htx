import type { DfnElementProps } from "@fartlabs/ht/dfn";
import { dfn as render } from "@fartlabs/ht/dfn";

export type { DfnElementProps };

/**
 * DFN component renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn>
 */
export function DFN(props: DfnElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
