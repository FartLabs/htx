import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { u as render } from "@fartlabs/ht/u";

export type { GlobalAttributes };

/**
 * U renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/u>
 */
export function U(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
