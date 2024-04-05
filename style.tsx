import type { StyleProps } from "@fartlabs/ht/style";
import { style as render } from "@fartlabs/ht/style";

export type { StyleProps };

/**
 * Style renders the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style>
 */
export function Style(
  props: StyleProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
