import type { OptgroupElementProps } from "@fartlabs/ht/optgroup";
import { optgroup as render } from "@fartlabs/ht/optgroup";

export type { OptgroupElementProps };

/**
 * OPTGROUP component renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup>
 */
export function OPTGROUP(
  props: OptgroupElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
