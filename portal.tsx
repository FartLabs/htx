import type { PortalElementProps } from "@fartlabs/ht/portal";
import { portal as render } from "@fartlabs/ht/portal";

export type { PortalElementProps };

/**
 * PORTAL component renders the [`portal`](https://developer.mozilla.org/docs/Web/HTML/Element/portal) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/portal>
 * @experimental
 */
export function PORTAL(
  props: PortalElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
