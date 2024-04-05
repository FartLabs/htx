import type { ColProps } from "@fartlabs/ht/col";
import { col as render } from "@fartlabs/ht/col";

export type { ColProps };

/**
 * Col renders the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/col>
 */
export function Col(props: ColProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest);
}
