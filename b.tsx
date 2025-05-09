import type { BElementProps } from "@fartlabs/ht/b";
import { b as render } from "@fartlabs/ht/b";

export type { BElementProps };

/**
 * B component renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b>
 */
export function B(props:
  & (BElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
