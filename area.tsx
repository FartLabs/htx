import type { AreaElementProps } from "@fartlabs/ht/area";
import { area as render } from "@fartlabs/ht/area";

export type { AreaElementProps };

/**
 * AREA component renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area>
 */
export function AREA(
  props: AreaElementProps & { children?: string[] } = {},
): string {
  return render(props);
}
