import type { SelectedcontentElementProps } from "@fartlabs/ht/selectedcontent";
import { selectedcontent as render } from "@fartlabs/ht/selectedcontent";

export type { SelectedcontentElementProps };

/**
 * SELECTEDCONTENT component renders the [`selectedcontent`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent>
 * @experimental
 */
export function SELECTEDCONTENT(
  props: SelectedcontentElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
