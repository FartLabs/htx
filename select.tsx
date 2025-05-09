import type { SelectElementProps } from "@fartlabs/ht/select";
import { select as render } from "@fartlabs/ht/select";

export type { SelectElementProps };

/**
 * SELECT component renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select>
 */
export function SELECT(
  props: SelectElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
