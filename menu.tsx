import type { MenuProps } from "@fartlabs/ht/menu";
import { menu as render } from "@fartlabs/ht/menu";

export type { MenuProps };

/**
 * Menu renders the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/menu>
 */
export function Menu(props: MenuProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
