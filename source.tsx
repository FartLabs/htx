import type { SourceElementProps } from "@fartlabs/ht/source";
import { source as render } from "@fartlabs/ht/source";

export type { SourceElementProps };

/**
 * SOURCE component renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/source>
 */
export function SOURCE(
  props: SourceElementProps & { children?: string[] } = {},
): string {
  return render(props);
}
