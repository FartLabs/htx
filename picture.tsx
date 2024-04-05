import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { picture as render } from "@fartlabs/ht/picture";

export type { GlobalAttributes };

/**
 * Picture renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/picture>
 */
export function Picture(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
