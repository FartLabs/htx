import type { SupElementProps } from "@fartlabs/ht/sup";
import { sup as render } from "@fartlabs/ht/sup";

export type { SupElementProps };

/**
 * SUP component renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Element/sup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/sup>
 */
export function SUP(
  props: SupElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
