import type { AcronymElementProps } from "@fartlabs/ht/acronym";
import { acronym as render } from "@fartlabs/ht/acronym";

export type { AcronymElementProps };

/**
 * ACRONYM component renders the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Element/acronym) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/acronym>
 * @deprecated
 */
export function ACRONYM(
  props: AcronymElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
