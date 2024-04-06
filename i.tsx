import type { IElementProps } from "@fartlabs/ht/i";
import { i as render } from "@fartlabs/ht/i";

export type { IElementProps };

/**
 * I component renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Element/i) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/i>
 */
export function I(props: IElementProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
