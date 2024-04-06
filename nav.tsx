import type { NavElementProps } from "@fartlabs/ht/nav";
import { nav as render } from "@fartlabs/ht/nav";

export type { NavElementProps };

/**
 * NAV component renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Element/nav) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/nav>
 */
export function NAV(
  props: NavElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
