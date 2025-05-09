import type { TheadElementProps } from "@fartlabs/ht/thead";
import { thead as render } from "@fartlabs/ht/thead";

export type { TheadElementProps };

/**
 * THEAD component renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead>
 */
export function THEAD(
  props: TheadElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
