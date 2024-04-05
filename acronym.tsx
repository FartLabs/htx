import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { acronym as render } from "@fartlabs/ht/acronym";

export type { GlobalAttributes };

/**
 * Acronym renders the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Element/acronym) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/acronym>
 * @deprecated
 */
export function Acronym(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
