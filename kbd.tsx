import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { kbd as render } from "@fartlabs/ht/kbd";

export type { GlobalAttributes };

/**
 * Kbd renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/kbd>
 */
export function Kbd(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
