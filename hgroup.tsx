import type { HgroupElementProps } from "@fartlabs/ht/hgroup";
import { hgroup as render } from "@fartlabs/ht/hgroup";

export type { HgroupElementProps };

/**
 * HGROUP component renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/hgroup>
 */
export function HGROUP(
  props: HgroupElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
