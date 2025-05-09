import type { IElementProps } from "@fartlabs/ht/i";
import { i as render } from "@fartlabs/ht/i";

export type { IElementProps };

/**
 * I component renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i>
 */
export function I(props: IElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
