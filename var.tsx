import type { VarElementProps } from "@fartlabs/ht/var";
import { var_ as render } from "@fartlabs/ht/var";

export type { VarElementProps };

/**
 * VAR component renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/var>
 */
export function VAR(
  props: VarElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
