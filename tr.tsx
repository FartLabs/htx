import type { TrElementProps } from "@fartlabs/ht/tr";
import { tr as render } from "@fartlabs/ht/tr";

export type { TrElementProps };

/**
 * TR component renders the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr>
 */
export function TR(props: TrElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
