import type { AddressElementProps } from "@fartlabs/ht/address";
import { address as render } from "@fartlabs/ht/address";

export type { AddressElementProps };

/**
 * ADDRESS component renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address>
 */
export function ADDRESS(
  props: AddressElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
