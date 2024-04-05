import type { TbodyProps } from "@fartlabs/ht/tbody";
import { tbody as render } from "@fartlabs/ht/tbody";

export type { TbodyProps };

/**
 * Tbody renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tbody>
 */
export function Tbody(
  props: TbodyProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
