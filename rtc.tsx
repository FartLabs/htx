import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { rtc as render } from "@fartlabs/ht/rtc";

export type { GlobalAttributes };

/**
 * Rtc renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rtc>
 * @deprecated
 */
export function Rtc(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
