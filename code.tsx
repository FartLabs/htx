import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { code as render } from "@fartlabs/ht/code";

export type { GlobalAttributes };

/**
 * Code renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Element/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/code>
 */
export function Code(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
