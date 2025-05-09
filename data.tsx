import type { DataElementProps } from "@fartlabs/ht/data";
import { data as render } from "@fartlabs/ht/data";

export type { DataElementProps };

/**
 * DATA component renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data>
 */
export function DATA(props:
  & (DataElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
