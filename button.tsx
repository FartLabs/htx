import type { ButtonElementProps } from "@fartlabs/ht/button";
import { button as render } from "@fartlabs/ht/button";

export type { ButtonElementProps };

/**
 * BUTTON component renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button>
 */
export function BUTTON(
  props: ButtonElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
