import type { RbElementProps } from "@fartlabs/ht/rb";
import { rb as render } from "@fartlabs/ht/rb";

export type { RbElementProps };

/**
 * RB component renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export function RB(props: RbElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
