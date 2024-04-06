import type { TbodyElementProps } from "@fartlabs/ht/tbody";
import { tbody as render } from "@fartlabs/ht/tbody";

export type { TbodyElementProps };

/**
 * TBODY component renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tbody>
 */
export function TBODY(
  props: TbodyElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
