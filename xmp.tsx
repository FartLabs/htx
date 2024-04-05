import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { xmp as render } from "@fartlabs/ht/xmp";

export type { GlobalAttributes };

/**
 * Xmp renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Element/xmp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/xmp>
 * @deprecated
 */
export function Xmp(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
