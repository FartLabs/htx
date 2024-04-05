import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { aside as render } from "@fartlabs/ht/aside";

export type { GlobalAttributes };

/**
 * Aside renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Element/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/aside>
 */
export function Aside(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
