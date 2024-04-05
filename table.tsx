import type { TableProps } from "@fartlabs/ht/table";
import { table as render } from "@fartlabs/ht/table";

export type { TableProps };

/**
 * Table renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table>
 */
export function Table(
  props: TableProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
