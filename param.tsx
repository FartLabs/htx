import type { ParamElementProps } from "@fartlabs/ht/param";
import { param as render } from "@fartlabs/ht/param";

export type { ParamElementProps };

/**
 * PARAM component renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/param>
 * @deprecated
 */
export function PARAM(
  props: ParamElementProps & { children?: string[] } = {},
): string {
  return render(props);
}
