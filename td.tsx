import type { TdProps } from "@fartlabs/ht/td";
import { td as render } from "@fartlabs/ht/td";

export type { TdProps };

/**
 * Td renders the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/td>
 */
export function Td(props: TdProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
