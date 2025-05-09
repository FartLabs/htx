import type { MeterElementProps } from "@fartlabs/ht/meter";
import { meter as render } from "@fartlabs/ht/meter";

export type { MeterElementProps };

/**
 * METER component renders the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter>
 */
export function METER(
  props: MeterElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
