import type { SearchElementProps } from "@fartlabs/ht/search";
import { search as render } from "@fartlabs/ht/search";

export type { SearchElementProps };

/**
 * SEARCH component renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search>
 */
export function SEARCH(
  props: SearchElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
