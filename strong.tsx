import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { strong as render } from "@fartlabs/ht/strong";

export type { GlobalAttributes };

/**
 * Strong renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Element/strong) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/strong>
 */
export function Strong(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
