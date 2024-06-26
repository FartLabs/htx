import type { InsElementProps } from "@fartlabs/ht/ins";
import { ins as render } from "@fartlabs/ht/ins";

export type { InsElementProps };

/**
 * INS component renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ins>
 */
export function INS(
  props: InsElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
