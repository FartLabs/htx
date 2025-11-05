import type { TextareaElementProps } from "@fartlabs/ht/textarea";
import { textarea as render } from "@fartlabs/ht/textarea";

export type { TextareaElementProps };

/**
 * TEXTAREA component renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea>
 */
export function TEXTAREA(props:
  & (TextareaElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
