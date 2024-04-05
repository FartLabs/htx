import type { DetailsProps } from "@fartlabs/ht/details";
import { details as render } from "@fartlabs/ht/details";

export type { DetailsProps };

/**
 * Details renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/details>
 */
export function Details(
  props: DetailsProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
