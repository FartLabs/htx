import type { SourceElementProps } from "@fartlabs/ht/source";
import { source as render } from "@fartlabs/ht/source";

export type { SourceElementProps };

/**
 * SOURCE component renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source>
 */
export function SOURCE(props:
  & (SourceElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
