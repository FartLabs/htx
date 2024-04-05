import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { samp as render } from "@fartlabs/ht/samp";

export type { GlobalAttributes };

/**
 * Samp renders the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Element/samp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/samp>
 */
export function Samp(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
