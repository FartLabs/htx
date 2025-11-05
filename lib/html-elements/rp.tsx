import type { RpElementProps } from "@fartlabs/ht/rp";
import { rp as render } from "@fartlabs/ht/rp";

export type { RpElementProps };

/**
 * RP component renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp>
 */
export function RP(props:
  & (RpElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
