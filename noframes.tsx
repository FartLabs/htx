import type { NoframesElementProps } from "@fartlabs/ht/noframes";
import { noframes as render } from "@fartlabs/ht/noframes";

export type { NoframesElementProps };

/**
 * NOFRAMES component renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes>
 * @deprecated
 */
export function NOFRAMES(
  props: NoframesElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
