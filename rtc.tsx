import type { RtcElementProps } from "@fartlabs/ht/rtc";
import { rtc as render } from "@fartlabs/ht/rtc";

export type { RtcElementProps };

/**
 * RTC component renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rtc>
 * @deprecated
 */
export function RTC(
  props: RtcElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
