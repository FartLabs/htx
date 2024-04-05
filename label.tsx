import type { LabelProps } from "@fartlabs/ht/label";
import { label as render } from "@fartlabs/ht/label";

export type { LabelProps };

/**
 * Label renders the [`label`](https://developer.mozilla.org/docs/Web/HTML/Element/label) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/label>
 */
export function Label(
  props: LabelProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
