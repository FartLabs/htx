import type { DivElementProps } from "@fartlabs/ht/div";
import { div as render } from "@fartlabs/ht/div";

export type { DivElementProps };

/**
 * DIV component renders the [`div`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div>
 */
export function DIV(
  props: DivElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
