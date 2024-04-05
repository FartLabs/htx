import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { strike as render } from "@fartlabs/ht/strike";

export type { GlobalAttributes };

/**
 * Strike renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Element/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/strike>
 * @deprecated
 */
export function Strike(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
