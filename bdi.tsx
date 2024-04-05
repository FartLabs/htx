import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { bdi as render } from "@fartlabs/ht/bdi";

export type { GlobalAttributes };

/**
 * Bdi renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Element/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/bdi>
 */
export function Bdi(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
