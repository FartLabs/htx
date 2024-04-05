import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { rt as render } from "@fartlabs/ht/rt";

export type { GlobalAttributes };

/**
 * Rt renders the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Element/rt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rt>
 */
export function Rt(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
