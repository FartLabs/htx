import type { TextareaElementProps } from "@fartlabs/ht/textarea";
import { textarea as render } from "@fartlabs/ht/textarea";

export type { TextareaElementProps };

/**
 * TEXTAREA component renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea>
 */
export function TEXTAREA(
  props: TextareaElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
