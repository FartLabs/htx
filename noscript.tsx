import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { noscript as render } from "@fartlabs/ht/noscript";

export type { GlobalAttributes };

/**
 * Noscript renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Element/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noscript>
 */
export function Noscript(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
