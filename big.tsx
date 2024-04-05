import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { big as render } from "@fartlabs/ht/big";

export type { GlobalAttributes };

/**
 * Big renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Element/big) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/big>
 * @deprecated
 */
export function Big(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
