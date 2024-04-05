import type { TimeProps } from "@fartlabs/ht/time";
import { time as render } from "@fartlabs/ht/time";

export type { TimeProps };

/**
 * Time renders the [`time`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/time>
 */
export function Time(props: TimeProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
