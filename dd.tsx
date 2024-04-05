import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { dd as render } from "@fartlabs/ht/dd";

export type { GlobalAttributes };

/**
 * Dd renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Element/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dd>
 */
export function Dd(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
