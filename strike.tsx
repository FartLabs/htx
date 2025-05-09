import type { StrikeElementProps } from "@fartlabs/ht/strike";
import { strike as render } from "@fartlabs/ht/strike";

export type { StrikeElementProps };

/**
 * STRIKE component renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike>
 * @deprecated
 */
export function STRIKE(
  props: StrikeElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
