import type { AcronymElementProps } from "@fartlabs/ht/acronym";
import { acronym as render } from "@fartlabs/ht/acronym";

export type { AcronymElementProps };

/**
 * ACRONYM component renders the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/acronym) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/acronym>
 * @deprecated
 */
export function ACRONYM(props:
  & (AcronymElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
