import type { BodyElementProps } from "@fartlabs/ht/body";
import { body as render } from "@fartlabs/ht/body";

export type { BodyElementProps };

/**
 * BODY component renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body>
 */
export function BODY(props:
  & (BodyElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
