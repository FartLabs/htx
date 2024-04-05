import type { MapProps } from "@fartlabs/ht/map";
import { map as render } from "@fartlabs/ht/map";

export type { MapProps };

/**
 * Map renders the [`map`](https://developer.mozilla.org/docs/Web/HTML/Element/map) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/map>
 */
export function Map(props: MapProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
