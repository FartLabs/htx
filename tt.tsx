import type { TtElementProps } from "@fartlabs/ht/tt";
import { tt as render } from "@fartlabs/ht/tt";

export type { TtElementProps };

/**
 * TT component renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tt>
 * @deprecated
 */
export function TT(props:
  & (TtElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
