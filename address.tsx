import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { address as render } from "@fartlabs/ht/address";

export type { GlobalAttributes };

/**
 * Address renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/address>
 */
export function Address(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
