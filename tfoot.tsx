import type { TfootElementProps } from "@fartlabs/ht/tfoot";
import { tfoot as render } from "@fartlabs/ht/tfoot";

export type { TfootElementProps };

/**
 * TFOOT component renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot>
 */
export function TFOOT(
  props: TfootElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
