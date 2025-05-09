import type { SpanElementProps } from "@fartlabs/ht/span";
import { span as render } from "@fartlabs/ht/span";

export type { SpanElementProps };

/**
 * SPAN component renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span>
 */
export function SPAN(props:
  & (SpanElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
