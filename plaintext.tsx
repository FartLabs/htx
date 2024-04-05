import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { plaintext as render } from "@fartlabs/ht/plaintext";

export type { GlobalAttributes };

/**
 * Plaintext renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Element/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/plaintext>
 * @deprecated
 */
export function Plaintext(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
