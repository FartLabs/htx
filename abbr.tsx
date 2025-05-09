import type { AbbrElementProps } from "@fartlabs/ht/abbr";
import { abbr as render } from "@fartlabs/ht/abbr";

export type { AbbrElementProps };

/**
 * ABBR component renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr>
 */
export function ABBR(
  props: AbbrElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
