import type { AreaElementProps } from "@fartlabs/ht/area";
import { area as render } from "@fartlabs/ht/area";

export type { AreaElementProps };

/**
 * AREA component renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area>
 */
export function AREA(props:
  & (AreaElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
