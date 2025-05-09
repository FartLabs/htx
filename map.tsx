import type { MapElementProps } from "@fartlabs/ht/map";
import { map as render } from "@fartlabs/ht/map";

export type { MapElementProps };

/**
 * MAP component renders the [`map`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map>
 */
export function MAP(
  props: MapElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
