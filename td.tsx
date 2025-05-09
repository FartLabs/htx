import type { TdElementProps } from "@fartlabs/ht/td";
import { td as render } from "@fartlabs/ht/td";

export type { TdElementProps };

/**
 * TD component renders the [`td`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td>
 */
export function TD(
  props: TdElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
