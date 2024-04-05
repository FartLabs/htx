import type { InputProps } from "@fartlabs/ht/input";
import { input as render } from "@fartlabs/ht/input";

export type { InputProps };

/**
 * Input renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export function Input(
  props: InputProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
