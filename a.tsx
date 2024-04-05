import type { AProps } from "@fartlabs/ht/a";
import { a as render } from "@fartlabs/ht/a";

export type { AProps };

/**
 * A renders the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a>
 */
export function A(props: AProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
