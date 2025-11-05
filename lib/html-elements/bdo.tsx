import type { BdoElementProps } from "@fartlabs/ht/bdo";
import { bdo as render } from "@fartlabs/ht/bdo";

export type { BdoElementProps };

/**
 * BDO component renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo>
 */
export function BDO(props:
  & (BdoElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
