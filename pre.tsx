import type { PreProps } from "@fartlabs/ht/pre";
import { pre as render } from "@fartlabs/ht/pre";

export type { PreProps };

/**
 * Pre renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre>
 */
export function Pre(props: PreProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
