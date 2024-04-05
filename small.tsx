import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { small as render } from "@fartlabs/ht/small";

export type { GlobalAttributes };

/**
 * Small renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/small>
 */
export function Small(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
