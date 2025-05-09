import type { FontElementProps } from "@fartlabs/ht/font";
import { font as render } from "@fartlabs/ht/font";

export type { FontElementProps };

/**
 * FONT component renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font>
 * @deprecated
 */
export function FONT(
  props: FontElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
