import type { MenuElementProps } from "@fartlabs/ht/menu";
import { menu as render } from "@fartlabs/ht/menu";

export type { MenuElementProps };

/**
 * MENU component renders the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/menu>
 */
export function MENU(
  props: MenuElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
