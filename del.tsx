import type { DelElementProps } from "@fartlabs/ht/del";
import { del as render } from "@fartlabs/ht/del";

export type { DelElementProps };

/**
 * DEL component renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/del>
 */
export function DEL(
  props: DelElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
