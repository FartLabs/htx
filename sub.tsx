import type { SubElementProps } from "@fartlabs/ht/sub";
import { sub as render } from "@fartlabs/ht/sub";

export type { SubElementProps };

/**
 * SUB component renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/sub>
 */
export function SUB(
  props: SubElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
