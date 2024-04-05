import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { b as render } from "@fartlabs/ht/b";

export type { GlobalAttributes };

/**
 * B renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/b>
 */
export function B(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
