import type { OptionProps } from "@fartlabs/ht/option";
import { option as render } from "@fartlabs/ht/option";

export type { OptionProps };

/**
 * Option renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/option>
 */
export function Option(
  props: OptionProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
