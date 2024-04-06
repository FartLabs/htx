import type { AddressElementProps } from "@fartlabs/ht/address";
import { address as render } from "@fartlabs/ht/address";

export type { AddressElementProps };

/**
 * ADDRESS component renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/address>
 */
export function ADDRESS(
  props: AddressElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
