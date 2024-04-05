import type { AreaProps } from "@fartlabs/ht/area";
import { area as render } from "@fartlabs/ht/area";

export type { AreaProps };

/**
 * Area renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area>
 */
export function Area(props: AreaProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest);
}
