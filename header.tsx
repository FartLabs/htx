import type { HeaderElementProps } from "@fartlabs/ht/header";
import { header as render } from "@fartlabs/ht/header";

export type { HeaderElementProps };

/**
 * HEADER component renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header>
 */
export function HEADER(
  props: HeaderElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
