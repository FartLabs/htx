import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { portal as render } from "@fartlabs/ht/portal";

export type { GlobalAttributes };

/**
 * Portal renders the [`portal`](https://developer.mozilla.org/docs/Web/HTML/Element/portal) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/portal>
 * @experimental
 */
export function Portal(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
