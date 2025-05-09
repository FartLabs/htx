import type { UElementProps } from "@fartlabs/ht/u";
import { u as render } from "@fartlabs/ht/u";

export type { UElementProps };

/**
 * U component renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u>
 */
export function U(props: UElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
