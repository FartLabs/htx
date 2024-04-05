import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { dl as render } from "@fartlabs/ht/dl";

export type { GlobalAttributes };

/**
 * Dl renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dl>
 */
export function Dl(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
