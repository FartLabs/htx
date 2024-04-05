import type { SourceProps } from "@fartlabs/ht/source";
import { source as render } from "@fartlabs/ht/source";

export type { SourceProps };

/**
 * Source renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/source>
 */
export function Source(
  props: SourceProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
