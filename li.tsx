import type { LiProps } from "@fartlabs/ht/li";
import { li as render } from "@fartlabs/ht/li";

export type { LiProps };

/**
 * Li renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/li>
 */
export function Li(props: LiProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
