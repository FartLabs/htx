import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { rp as render } from "@fartlabs/ht/rp";

export type { GlobalAttributes };

/**
 * Rp renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Element/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rp>
 */
export function Rp(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
