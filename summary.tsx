import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { summary as render } from "@fartlabs/ht/summary";

export type { GlobalAttributes };

/**
 * Summary renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/summary>
 */
export function Summary(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
