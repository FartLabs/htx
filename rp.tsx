import type { RpElementProps } from "@fartlabs/ht/rp";
import { rp as render } from "@fartlabs/ht/rp";

export type { RpElementProps };

/**
 * RP component renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Element/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rp>
 */
export function RP(
  props: RpElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
