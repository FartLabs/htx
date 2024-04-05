import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { s as render } from "@fartlabs/ht/s";

export type { GlobalAttributes };

/**
 * S renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/s>
 */
export function S(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
