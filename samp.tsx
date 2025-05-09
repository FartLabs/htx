import type { SampElementProps } from "@fartlabs/ht/samp";
import { samp as render } from "@fartlabs/ht/samp";

export type { SampElementProps };

/**
 * SAMP component renders the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp>
 */
export function SAMP(
  props: SampElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
