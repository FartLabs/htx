import type { BaseProps } from "@fartlabs/ht/base";
import { base as render } from "@fartlabs/ht/base";

export type { BaseProps };

/**
 * Base renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/base>
 */
export function Base(props: BaseProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest);
}
