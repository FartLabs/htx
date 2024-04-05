import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { noframes as render } from "@fartlabs/ht/noframes";

export type { GlobalAttributes };

/**
 * Noframes renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Element/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noframes>
 * @deprecated
 */
export function Noframes(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
