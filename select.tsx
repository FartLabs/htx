import type { SelectProps } from "@fartlabs/ht/select";
import { select as render } from "@fartlabs/ht/select";

export type { SelectProps };

/**
 * Select renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/select>
 */
export function Select(
  props: SelectProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
