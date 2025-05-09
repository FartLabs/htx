import type { BigElementProps } from "@fartlabs/ht/big";
import { big as render } from "@fartlabs/ht/big";

export type { BigElementProps };

/**
 * BIG component renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big>
 * @deprecated
 */
export function BIG(props:
  & (BigElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
