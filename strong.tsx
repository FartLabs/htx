import type { StrongElementProps } from "@fartlabs/ht/strong";
import { strong as render } from "@fartlabs/ht/strong";

export type { StrongElementProps };

/**
 * STRONG component renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong>
 */
export function STRONG(props:
  & (StrongElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
