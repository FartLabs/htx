import type { MarqueeElementProps } from "@fartlabs/ht/marquee";
import { marquee as render } from "@fartlabs/ht/marquee";

export type { MarqueeElementProps };

/**
 * MARQUEE component renders the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee>
 * @deprecated
 */
export function MARQUEE(
  props: MarqueeElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
