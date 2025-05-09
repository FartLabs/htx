import type { LiElementProps } from "@fartlabs/ht/li";
import { li as render } from "@fartlabs/ht/li";

export type { LiElementProps };

/**
 * LI component renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li>
 */
export function LI(props:
  & (LiElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
