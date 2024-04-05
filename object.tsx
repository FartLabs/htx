import type { ObjectProps } from "@fartlabs/ht/object";
import { object as render } from "@fartlabs/ht/object";

export type { ObjectProps };

/**
 * Object renders the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object>
 */
export function Object(
  props: ObjectProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
