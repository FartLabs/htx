import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { hgroup as render } from "@fartlabs/ht/hgroup";

export type { GlobalAttributes };

/**
 * Hgroup renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/hgroup>
 */
export function Hgroup(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
