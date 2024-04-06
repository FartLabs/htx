import type { NobrElementProps } from "@fartlabs/ht/nobr";
import { nobr as render } from "@fartlabs/ht/nobr";

export type { NobrElementProps };

/**
 * NOBR component renders the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Element/nobr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/nobr>
 * @deprecated
 */
export function NOBR(
  props: NobrElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
