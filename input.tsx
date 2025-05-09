import type { InputElementProps } from "@fartlabs/ht/input";
import { input as render } from "@fartlabs/ht/input";

export type { InputElementProps };

/**
 * INPUT component renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input>
 */
export function INPUT(props:
  & (InputElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
