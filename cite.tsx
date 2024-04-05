import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { cite as render } from "@fartlabs/ht/cite";

export type { GlobalAttributes };

/**
 * Cite renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/cite>
 */
export function Cite(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
