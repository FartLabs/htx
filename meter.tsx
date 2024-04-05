import type { MeterProps } from "@fartlabs/ht/meter";
import { meter as render } from "@fartlabs/ht/meter";

export type { MeterProps };

/**
 * Meter renders the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter>
 */
export function Meter(
  props: MeterProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
