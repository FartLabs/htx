import type { HeaderElementProps } from "@fartlabs/ht/header";
import { header as render } from "@fartlabs/ht/header";

export type { HeaderElementProps };

/**
 * HEADER component renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/header>
 */
export function HEADER(
  props: HeaderElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
