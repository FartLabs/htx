import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { search as render } from "@fartlabs/ht/search";

export type { GlobalAttributes };

/**
 * Search renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/search>
 */
export function Search(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
