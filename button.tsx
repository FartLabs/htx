import type { ButtonProps } from "@fartlabs/ht/button";
import { button as render } from "@fartlabs/ht/button";

export type { ButtonProps };

/**
 * Button renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button>
 */
export function Button(
  props: ButtonProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
