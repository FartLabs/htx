import type { ParamProps } from "@fartlabs/ht/param";
import { param as render } from "@fartlabs/ht/param";

export type { ParamProps };

/**
 * Param renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/param>
 * @deprecated
 */
export function Param(
  props: ParamProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
