import type { InputElementProps } from "@fartlabs/ht/input";
import { input as render } from "@fartlabs/ht/input";

export type { InputElementProps };

/**
 * INPUT component renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export function INPUT(
  props: InputElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
