import type { TheadElementProps } from "@fartlabs/ht/thead";
import { thead as render } from "@fartlabs/ht/thead";

export type { TheadElementProps };

/**
 * THEAD component renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/thead>
 */
export function THEAD(
  props: TheadElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
