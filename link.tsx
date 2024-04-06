import type { LinkElementProps } from "@fartlabs/ht/link";
import { link as render } from "@fartlabs/ht/link";

export type { LinkElementProps };

/**
 * LINK component renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link>
 */
export function LINK(
  props: LinkElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest);
}
