import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { figcaption as render } from "@fartlabs/ht/figcaption";

export type { GlobalAttributes };

/**
 * Figcaption renders the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Element/figcaption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/figcaption>
 */
export function Figcaption(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
