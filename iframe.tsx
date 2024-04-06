import type { IframeElementProps } from "@fartlabs/ht/iframe";
import { iframe as render } from "@fartlabs/ht/iframe";

export type { IframeElementProps };

/**
 * IFRAME component renders the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/iframe>
 */
export function IFRAME(
  props: IframeElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
