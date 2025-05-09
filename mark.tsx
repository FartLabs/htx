import type { MarkElementProps } from "@fartlabs/ht/mark";
import { mark as render } from "@fartlabs/ht/mark";

export type { MarkElementProps };

/**
 * MARK component renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark>
 */
export function MARK(
  props: MarkElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
