import type { EmElementProps } from "@fartlabs/ht/em";
import { em as render } from "@fartlabs/ht/em";

export type { EmElementProps };

/**
 * EM component renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em>
 */
export function EM(props: EmElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
