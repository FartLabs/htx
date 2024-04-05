import type { TrProps } from "@fartlabs/ht/tr";
import { tr as render } from "@fartlabs/ht/tr";

export type { TrProps };

/**
 * Tr renders the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Element/tr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tr>
 */
export function Tr(props: TrProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
