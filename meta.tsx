import type { MetaElementProps } from "@fartlabs/ht/meta";
import { meta as render } from "@fartlabs/ht/meta";

export type { MetaElementProps };

/**
 * META component renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meta>
 */
export function META(
  props: MetaElementProps & { children?: string[] } = {},
): string {
  return render(props);
}
