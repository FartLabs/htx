import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { center as render } from "@fartlabs/ht/center";

export type { GlobalAttributes };

/**
 * Center renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/center>
 * @deprecated
 */
export function Center(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
