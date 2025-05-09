import type { ButtonElementProps } from "@fartlabs/ht/button";
import { button as render } from "@fartlabs/ht/button";

export type { ButtonElementProps };

/**
 * BUTTON component renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button>
 */
export function BUTTON(
  props: ButtonElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
