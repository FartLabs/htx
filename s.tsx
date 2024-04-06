import type { SElementProps } from "@fartlabs/ht/s";
import { s as render } from "@fartlabs/ht/s";

export type { SElementProps };

/**
 * S component renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/s>
 */
export function S(props: SElementProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
