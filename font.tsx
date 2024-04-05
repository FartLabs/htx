import type { FontProps } from "@fartlabs/ht/font";
import { font as render } from "@fartlabs/ht/font";

export type { FontProps };

/**
 * Font renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/font>
 * @deprecated
 */
export function Font(props: FontProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
