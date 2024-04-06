import type { RbElementProps } from "@fartlabs/ht/rb";
import { rb as render } from "@fartlabs/ht/rb";

export type { RbElementProps };

/**
 * RB component renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Element/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rb>
 * @deprecated
 */
export function RB(
  props: RbElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
