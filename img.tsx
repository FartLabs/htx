import type { ImgElementProps } from "@fartlabs/ht/img";
import { img as render } from "@fartlabs/ht/img";

export type { ImgElementProps };

/**
 * IMG component renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img>
 */
export function IMG(props:
  & (ImgElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  return render(props);
}
