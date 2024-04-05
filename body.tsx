import type { BodyProps } from "@fartlabs/ht/body";
import { body as render } from "@fartlabs/ht/body";

export type { BodyProps };

/**
 * Body renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body>
 */
export function Body(props: BodyProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
