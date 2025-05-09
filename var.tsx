import type { VarElementProps } from "@fartlabs/ht/var";
import { var_ as render } from "@fartlabs/ht/var";

export type { VarElementProps };

/**
 * VAR component renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var>
 */
export function VAR(props:
  & (VarElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
