import type { TableElementProps } from "@fartlabs/ht/table";
import { table as render } from "@fartlabs/ht/table";

export type { TableElementProps };

/**
 * TABLE component renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table>
 */
export function TABLE(props:
  & (TableElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
