import type { ThElementProps } from "@fartlabs/ht/th";
import { th as render } from "@fartlabs/ht/th";

export type { ThElementProps };

/**
 * TH component renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th>
 */
export function TH(props:
  & (ThElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
