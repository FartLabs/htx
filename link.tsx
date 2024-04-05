import type { LinkProps } from "@fartlabs/ht/link";
import { link as render } from "@fartlabs/ht/link";

export type { LinkProps };

/**
 * Link renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/link>
 */
export function Link(props: LinkProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest);
}
