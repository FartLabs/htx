import type { OutputElementProps } from "@fartlabs/ht/output";
import { output as render } from "@fartlabs/ht/output";

export type { OutputElementProps };

/**
 * OUTPUT component renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output>
 */
export function OUTPUT(
  props: OutputElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
