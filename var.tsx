import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { var_ as render } from "@fartlabs/ht/var";

export type { GlobalAttributes };

/**
 * Var renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/var>
 */
export function Var(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
