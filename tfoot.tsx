import type { TfootProps } from "@fartlabs/ht/tfoot";
import { tfoot as render } from "@fartlabs/ht/tfoot";

export type { TfootProps };

/**
 * Tfoot renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot>
 */
export function Tfoot(
  props: TfootProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
