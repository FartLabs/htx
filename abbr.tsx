import type { AbbrElementProps } from "@fartlabs/ht/abbr";
import { abbr as render } from "@fartlabs/ht/abbr";

export type { AbbrElementProps };

/**
 * ABBR component renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/abbr>
 */
export function ABBR(
  props: AbbrElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
