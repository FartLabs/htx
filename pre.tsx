import type { PreElementProps } from "@fartlabs/ht/pre";
import { pre as render } from "@fartlabs/ht/pre";

export type { PreElementProps };

/**
 * PRE component renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre>
 */
export function PRE(
  props: PreElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
