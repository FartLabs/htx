import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { abbr as render } from "@fartlabs/ht/abbr";

export type { GlobalAttributes };

/**
 * Abbr renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/abbr>
 */
export function Abbr(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
