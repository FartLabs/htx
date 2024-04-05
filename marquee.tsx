import type { MarqueeProps } from "@fartlabs/ht/marquee";
import { marquee as render } from "@fartlabs/ht/marquee";

export type { MarqueeProps };

/**
 * Marquee renders the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Element/marquee) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/marquee>
 * @deprecated
 */
export function Marquee(
  props: MarqueeProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
