import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { section as render } from "@fartlabs/ht/section";

export type { GlobalAttributes };

/**
 * Section renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Element/section) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/section>
 */
export function Section(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
