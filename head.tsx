import type { HeadElementProps } from "@fartlabs/ht/head";
import { head as render } from "@fartlabs/ht/head";

export type { HeadElementProps };

/**
 * HEAD component renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head>
 */
export function HEAD(props:
  & (HeadElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
