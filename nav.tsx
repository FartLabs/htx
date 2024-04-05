import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { nav as render } from "@fartlabs/ht/nav";

export type { GlobalAttributes };

/**
 * Nav renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Element/nav) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/nav>
 */
export function Nav(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
