import type { LiElementProps } from "@fartlabs/ht/li";
import { li as render } from "@fartlabs/ht/li";

export type { LiElementProps };

/**
 * LI component renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/li>
 */
export function LI(
  props: LiElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
