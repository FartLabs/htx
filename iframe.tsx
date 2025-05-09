import type { IframeElementProps } from "@fartlabs/ht/iframe";
import { iframe as render } from "@fartlabs/ht/iframe";

export type { IframeElementProps };

/**
 * IFRAME component renders the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe>
 */
export function IFRAME(props:
  & (IframeElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
