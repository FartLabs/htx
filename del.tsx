import type { DelElementProps } from "@fartlabs/ht/del";
import { del as render } from "@fartlabs/ht/del";

export type { DelElementProps };

/**
 * DEL component renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del>
 */
export function DEL(props: DelElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
