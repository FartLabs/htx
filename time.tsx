import type { TimeElementProps } from "@fartlabs/ht/time";
import { time as render } from "@fartlabs/ht/time";

export type { TimeElementProps };

/**
 * TIME component renders the [`time`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time>
 */
export function TIME(
  props: TimeElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
