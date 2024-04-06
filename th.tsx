import type { ThElementProps } from "@fartlabs/ht/th";
import { th as render } from "@fartlabs/ht/th";

export type { ThElementProps };

/**
 * TH component renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th>
 */
export function TH(
  props: ThElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
