import type { NoframesElementProps } from "@fartlabs/ht/noframes";
import { noframes as render } from "@fartlabs/ht/noframes";

export type { NoframesElementProps };

/**
 * NOFRAMES component renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Element/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noframes>
 * @deprecated
 */
export function NOFRAMES(
  props: NoframesElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
