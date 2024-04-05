import type { TheadProps } from "@fartlabs/ht/thead";
import { thead as render } from "@fartlabs/ht/thead";

export type { TheadProps };

/**
 * Thead renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/thead>
 */
export function Thead(
  props: TheadProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
