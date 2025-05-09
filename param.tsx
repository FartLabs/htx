import type { ParamElementProps } from "@fartlabs/ht/param";
import { param as render } from "@fartlabs/ht/param";

export type { ParamElementProps };

/**
 * PARAM component renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param>
 * @deprecated
 */
export function PARAM(props:
  & (ParamElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
