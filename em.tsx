import type { EmElementProps } from "@fartlabs/ht/em";
import { em as render } from "@fartlabs/ht/em";

export type { EmElementProps };

/**
 * EM component renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/em>
 */
export function EM(
  props: EmElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
