import type { BrElementProps } from "@fartlabs/ht/br";
import { br as render } from "@fartlabs/ht/br";

export type { BrElementProps };

/**
 * BR component renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/br>
 */
export function BR(
  props: BrElementProps & { children?: string[] } = {},
): string {
  return render(props);
}
