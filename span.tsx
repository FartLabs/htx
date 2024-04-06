import type { SpanElementProps } from "@fartlabs/ht/span";
import { span as render } from "@fartlabs/ht/span";

export type { SpanElementProps };

/**
 * SPAN component renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Element/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/span>
 */
export function SPAN(
  props: SpanElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
