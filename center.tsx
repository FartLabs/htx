import type { CenterElementProps } from "@fartlabs/ht/center";
import { center as render } from "@fartlabs/ht/center";

export type { CenterElementProps };

/**
 * CENTER component renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/center>
 * @deprecated
 */
export function CENTER(
  props: CenterElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
