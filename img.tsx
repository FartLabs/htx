import type { ImgElementProps } from "@fartlabs/ht/img";
import { img as render } from "@fartlabs/ht/img";

export type { ImgElementProps };

/**
 * IMG component renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img>
 */
export function IMG(
  props: ImgElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
