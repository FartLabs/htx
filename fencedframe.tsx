import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { fencedframe as render } from "@fartlabs/ht/fencedframe";

export type { GlobalAttributes };

/**
 * Fencedframe renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe>
 * @experimental
 */
export function Fencedframe(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
