import type { InsProps } from "@fartlabs/ht/ins";
import { ins as render } from "@fartlabs/ht/ins";

export type { InsProps };

/**
 * Ins renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ins>
 */
export function Ins(props: InsProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
