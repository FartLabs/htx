import type { InsElementProps } from "@fartlabs/ht/ins";
import { ins as render } from "@fartlabs/ht/ins";

export type { InsElementProps };

/**
 * INS component renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins>
 */
export function INS(props:
  & (InsElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
