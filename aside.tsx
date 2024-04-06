import type { AsideElementProps } from "@fartlabs/ht/aside";
import { aside as render } from "@fartlabs/ht/aside";

export type { AsideElementProps };

/**
 * ASIDE component renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Element/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/aside>
 */
export function ASIDE(
  props: AsideElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
