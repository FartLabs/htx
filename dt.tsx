import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { dt as render } from "@fartlabs/ht/dt";

export type { GlobalAttributes };

/**
 * Dt renders the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Element/dt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dt>
 */
export function Dt(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
