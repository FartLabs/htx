import type { NavElementProps } from "@fartlabs/ht/nav";
import { nav as render } from "@fartlabs/ht/nav";

export type { NavElementProps };

/**
 * NAV component renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav>
 */
export function NAV(props: NavElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
