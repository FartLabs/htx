import type { NoembedElementProps } from "@fartlabs/ht/noembed";
import { noembed as render } from "@fartlabs/ht/noembed";

export type { NoembedElementProps };

/**
 * NOEMBED component renders the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed>
 * @deprecated
 */
export function NOEMBED(
  props: NoembedElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
