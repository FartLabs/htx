import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { span as render } from "@fartlabs/ht/span";

export type { GlobalAttributes };

/**
 * Span renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Element/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/span>
 */
export function Span(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
