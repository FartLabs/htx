import type { BrElementProps } from "@fartlabs/ht/br";
import { br as render } from "@fartlabs/ht/br";

export type { BrElementProps };

/**
 * BR component renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br>
 */
export function BR(props:
  & (BrElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
