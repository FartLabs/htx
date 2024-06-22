import type { BaseElementProps } from "@fartlabs/ht/base";
import { base as render } from "@fartlabs/ht/base";

export type { BaseElementProps };

/**
 * BASE component renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/base>
 */
export function BASE(
  props: BaseElementProps & { children?: string[] } = {},
): string {
  return render(props);
}
