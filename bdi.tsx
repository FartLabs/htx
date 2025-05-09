import type { BdiElementProps } from "@fartlabs/ht/bdi";
import { bdi as render } from "@fartlabs/ht/bdi";

export type { BdiElementProps };

/**
 * BDI component renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi>
 */
export function BDI(props:
  & (BdiElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
