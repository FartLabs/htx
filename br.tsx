import type { BrProps } from "@fartlabs/ht/br";
import { br as render } from "@fartlabs/ht/br";

export type { BrProps };

/**
 * Br renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/br>
 */
export function Br(props: BrProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest);
}
