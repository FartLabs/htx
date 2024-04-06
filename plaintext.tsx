import type { PlaintextElementProps } from "@fartlabs/ht/plaintext";
import { plaintext as render } from "@fartlabs/ht/plaintext";

export type { PlaintextElementProps };

/**
 * PLAINTEXT component renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Element/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/plaintext>
 * @deprecated
 */
export function PLAINTEXT(
  props: PlaintextElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
