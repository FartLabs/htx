import type { ImgProps } from "@fartlabs/ht/img";
import { img as render } from "@fartlabs/ht/img";

export type { ImgProps };

/**
 * Img renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/img>
 */
export function Img(props: ImgProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest);
}
