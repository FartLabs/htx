import type { ThProps } from "@fartlabs/ht/th";
import { th as render } from "@fartlabs/ht/th";

export type { ThProps };

/**
 * Th renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th>
 */
export function Th(props: ThProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
