import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { p as render } from "@fartlabs/ht/p";

export type { GlobalAttributes };

/**
 * P renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Element/p) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/p>
 */
export function P(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
