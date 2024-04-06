import type { DetailsElementProps } from "@fartlabs/ht/details";
import { details as render } from "@fartlabs/ht/details";

export type { DetailsElementProps };

/**
 * DETAILS component renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/details>
 */
export function DETAILS(
  props: DetailsElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
