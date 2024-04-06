import type { AElementProps } from "@fartlabs/ht/a";
import { a as render } from "@fartlabs/ht/a";

export type { AElementProps };

/**
 * A component renders the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a>
 */
export function A(props: AElementProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
