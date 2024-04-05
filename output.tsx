import type { OutputProps } from "@fartlabs/ht/output";
import { output as render } from "@fartlabs/ht/output";

export type { OutputProps };

/**
 * Output renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output>
 */
export function Output(
  props: OutputProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
