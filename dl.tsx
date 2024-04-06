import type { DlElementProps } from "@fartlabs/ht/dl";
import { dl as render } from "@fartlabs/ht/dl";

export type { DlElementProps };

/**
 * DL component renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dl>
 */
export function DL(
  props: DlElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
