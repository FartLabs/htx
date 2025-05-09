import type { DatalistElementProps } from "@fartlabs/ht/datalist";
import { datalist as render } from "@fartlabs/ht/datalist";

export type { DatalistElementProps };

/**
 * DATALIST component renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist>
 */
export function DATALIST(
  props: DatalistElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
