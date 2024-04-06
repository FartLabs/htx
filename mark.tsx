import type { MarkElementProps } from "@fartlabs/ht/mark";
import { mark as render } from "@fartlabs/ht/mark";

export type { MarkElementProps };

/**
 * MARK component renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Element/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/mark>
 */
export function MARK(
  props: MarkElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
