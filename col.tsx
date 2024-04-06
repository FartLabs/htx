import type { ColElementProps } from "@fartlabs/ht/col";
import { col as render } from "@fartlabs/ht/col";

export type { ColElementProps };

/**
 * COL component renders the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/col>
 */
export function COL(
  props: ColElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
