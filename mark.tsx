import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { mark as render } from "@fartlabs/ht/mark";

export type { GlobalAttributes };

/**
 * Mark renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Element/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/mark>
 */
export function Mark(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
