import type { TableElementProps } from "@fartlabs/ht/table";
import { table as render } from "@fartlabs/ht/table";

export type { TableElementProps };

/**
 * TABLE component renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table>
 */
export function TABLE(
  props: TableElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
