import type { BElementProps } from "@fartlabs/ht/b";
import { b as render } from "@fartlabs/ht/b";

export type { BElementProps };

/**
 * B component renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/b>
 */
export function B(props: BElementProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
