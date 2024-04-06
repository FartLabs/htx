import type { TtElementProps } from "@fartlabs/ht/tt";
import { tt as render } from "@fartlabs/ht/tt";

export type { TtElementProps };

/**
 * TT component renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Element/tt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tt>
 * @deprecated
 */
export function TT(
  props: TtElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
