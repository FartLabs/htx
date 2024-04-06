import type { RtElementProps } from "@fartlabs/ht/rt";
import { rt as render } from "@fartlabs/ht/rt";

export type { RtElementProps };

/**
 * RT component renders the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Element/rt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rt>
 */
export function RT(
  props: RtElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
