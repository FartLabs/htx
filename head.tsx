import type { HeadProps } from "@fartlabs/ht/head";
import { head as render } from "@fartlabs/ht/head";

export type { HeadProps };

/**
 * Head renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Element/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/head>
 */
export function Head(props: HeadProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
