import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { ruby as render } from "@fartlabs/ht/ruby";

export type { GlobalAttributes };

/**
 * Ruby renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ruby>
 */
export function Ruby(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
