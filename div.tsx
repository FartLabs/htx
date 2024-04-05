import type { DivProps } from "@fartlabs/ht/div";
import { div as render } from "@fartlabs/ht/div";

export type { DivProps };

/**
 * Div renders the [`div`](https://developer.mozilla.org/docs/Web/HTML/Element/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/div>
 */
export function Div(props: DivProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
