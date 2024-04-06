import type { DatalistElementProps } from "@fartlabs/ht/datalist";
import { datalist as render } from "@fartlabs/ht/datalist";

export type { DatalistElementProps };

/**
 * DATALIST component renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Element/datalist) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/datalist>
 */
export function DATALIST(
  props: DatalistElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
