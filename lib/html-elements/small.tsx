import type { SmallElementProps } from "@fartlabs/ht/small";
import { small as render } from "@fartlabs/ht/small";

export type { SmallElementProps };

/**
 * SMALL component renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small>
 */
export function SMALL(props:
  & (SmallElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
