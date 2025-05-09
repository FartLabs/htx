import type { LabelElementProps } from "@fartlabs/ht/label";
import { label as render } from "@fartlabs/ht/label";

export type { LabelElementProps };

/**
 * LABEL component renders the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label>
 */
export function LABEL(
  props: LabelElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
