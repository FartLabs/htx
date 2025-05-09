import type { SubElementProps } from "@fartlabs/ht/sub";
import { sub as render } from "@fartlabs/ht/sub";

export type { SubElementProps };

/**
 * SUB component renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub>
 */
export function SUB(props: SubElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
