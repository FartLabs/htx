import type { ObjectElementProps } from "@fartlabs/ht/object";
import { object as render } from "@fartlabs/ht/object";

export type { ObjectElementProps };

/**
 * OBJECT component renders the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object>
 */
export function OBJECT(
  props: ObjectElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
