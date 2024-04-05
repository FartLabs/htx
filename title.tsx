import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { title as render } from "@fartlabs/ht/title";

export type { GlobalAttributes };

/**
 * Title renders the [`title`](https://developer.mozilla.org/docs/Web/HTML/Element/title) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/title>
 */
export function Title(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
