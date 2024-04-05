import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { sub as render } from "@fartlabs/ht/sub";

export type { GlobalAttributes };

/**
 * Sub renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/sub>
 */
export function Sub(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
