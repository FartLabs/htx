import type { MetaElementProps } from "@fartlabs/ht/meta";
import { meta as render } from "@fartlabs/ht/meta";

export type { MetaElementProps };

/**
 * META component renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta>
 */
export function META(props:
  & (MetaElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
