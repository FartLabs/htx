import type { OptionElementProps } from "@fartlabs/ht/option";
import { option as render } from "@fartlabs/ht/option";

export type { OptionElementProps };

/**
 * OPTION component renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option>
 */
export function OPTION(
  props: OptionElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
