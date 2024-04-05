import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { dfn as render } from "@fartlabs/ht/dfn";

export type { GlobalAttributes };

/**
 * Dfn renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dfn>
 */
export function Dfn(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
