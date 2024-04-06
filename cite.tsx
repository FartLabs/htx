import type { CiteElementProps } from "@fartlabs/ht/cite";
import { cite as render } from "@fartlabs/ht/cite";

export type { CiteElementProps };

/**
 * CITE component renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/cite>
 */
export function CITE(
  props: CiteElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
