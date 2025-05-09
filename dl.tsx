import type { DlElementProps } from "@fartlabs/ht/dl";
import { dl as render } from "@fartlabs/ht/dl";

export type { DlElementProps };

/**
 * DL component renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl>
 */
export function DL(props: DlElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
