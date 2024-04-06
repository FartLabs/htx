import type { PictureElementProps } from "@fartlabs/ht/picture";
import { picture as render } from "@fartlabs/ht/picture";

export type { PictureElementProps };

/**
 * PICTURE component renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/picture>
 */
export function PICTURE(
  props: PictureElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
