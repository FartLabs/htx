import type { TextareaProps } from "@fartlabs/ht/textarea";
import { textarea as render } from "@fartlabs/ht/textarea";

export type { TextareaProps };

/**
 * Textarea renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Element/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/textarea>
 */
export function Textarea(
  props: TextareaProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
