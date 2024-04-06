import type { BdiElementProps } from "@fartlabs/ht/bdi";
import { bdi as render } from "@fartlabs/ht/bdi";

export type { BdiElementProps };

/**
 * BDI component renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Element/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/bdi>
 */
export function BDI(
  props: BdiElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
