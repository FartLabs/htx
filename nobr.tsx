import type { NobrElementProps } from "@fartlabs/ht/nobr";
import { nobr as render } from "@fartlabs/ht/nobr";

export type { NobrElementProps };

/**
 * NOBR component renders the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nobr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nobr>
 * @deprecated
 */
export function NOBR(props:
  & (NobrElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
