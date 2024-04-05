import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { figure as render } from "@fartlabs/ht/figure";

export type { GlobalAttributes };

/**
 * Figure renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/figure>
 */
export function Figure(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
