import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { em as render } from "@fartlabs/ht/em";

export type { GlobalAttributes };

/**
 * Em renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/em>
 */
export function Em(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
