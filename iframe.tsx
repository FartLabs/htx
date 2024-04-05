import type { IframeProps } from "@fartlabs/ht/iframe";
import { iframe as render } from "@fartlabs/ht/iframe";

export type { IframeProps };

/**
 * Iframe renders the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/iframe>
 */
export function Iframe(
  props: IframeProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
