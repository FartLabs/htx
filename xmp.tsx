import type { XmpElementProps } from "@fartlabs/ht/xmp";
import { xmp as render } from "@fartlabs/ht/xmp";

export type { XmpElementProps };

/**
 * XMP component renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/xmp>
 * @deprecated
 */
export function XMP(
  props: XmpElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
