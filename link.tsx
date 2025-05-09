import type { LinkElementProps } from "@fartlabs/ht/link";
import { link as render } from "@fartlabs/ht/link";

export type { LinkElementProps };

/**
 * LINK component renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link>
 */
export function LINK(props:
  & (LinkElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
