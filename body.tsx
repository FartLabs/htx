import type { BodyElementProps } from "@fartlabs/ht/body";
import { body as render } from "@fartlabs/ht/body";

export type { BodyElementProps };

/**
 * BODY component renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body>
 */
export function BODY(
  props: BodyElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
