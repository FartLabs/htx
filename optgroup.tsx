import type { OptgroupProps } from "@fartlabs/ht/optgroup";
import { optgroup as render } from "@fartlabs/ht/optgroup";

export type { OptgroupProps };

/**
 * Optgroup renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/optgroup>
 */
export function Optgroup(
  props: OptgroupProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
