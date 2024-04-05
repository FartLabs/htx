import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { datalist as render } from "@fartlabs/ht/datalist";

export type { GlobalAttributes };

/**
 * Datalist renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Element/datalist) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/datalist>
 */
export function Datalist(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
