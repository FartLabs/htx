import type { StyleElementProps } from "@fartlabs/ht/style";
import { style as render } from "@fartlabs/ht/style";

export type { StyleElementProps };

/**
 * STYLE component renders the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style>
 */
export function STYLE(
  props: StyleElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
