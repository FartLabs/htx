import type { DdElementProps } from "@fartlabs/ht/dd";
import { dd as render } from "@fartlabs/ht/dd";

export type { DdElementProps };

/**
 * DD component renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Element/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dd>
 */
export function DD(
  props: DdElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
