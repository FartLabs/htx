import type { UElementProps } from "@fartlabs/ht/u";
import { u as render } from "@fartlabs/ht/u";

export type { UElementProps };

/**
 * U component renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/u>
 */
export function U(props: UElementProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
