import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { noembed as render } from "@fartlabs/ht/noembed";

export type { GlobalAttributes };

/**
 * Noembed renders the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Element/noembed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noembed>
 * @deprecated
 */
export function Noembed(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
