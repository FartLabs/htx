import type { DataElementProps } from "@fartlabs/ht/data";
import { data as render } from "@fartlabs/ht/data";

export type { DataElementProps };

/**
 * DATA component renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/data>
 */
export function DATA(
  props: DataElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
