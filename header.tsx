import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { header as render } from "@fartlabs/ht/header";

export type { GlobalAttributes };

/**
 * Header renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/header>
 */
export function Header(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
