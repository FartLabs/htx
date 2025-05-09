import type { FencedframeElementProps } from "@fartlabs/ht/fencedframe";
import { fencedframe as render } from "@fartlabs/ht/fencedframe";

export type { FencedframeElementProps };

/**
 * FENCEDFRAME component renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @experimental
 */
export function FENCEDFRAME(
  props: FencedframeElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
