import type { PictureElementProps } from "@fartlabs/ht/picture";
import { picture as render } from "@fartlabs/ht/picture";

export type { PictureElementProps };

/**
 * PICTURE component renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture>
 */
export function PICTURE(
  props: PictureElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
