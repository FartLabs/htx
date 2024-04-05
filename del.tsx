import type { DelProps } from "@fartlabs/ht/del";
import { del as render } from "@fartlabs/ht/del";

export type { DelProps };

/**
 * Del renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/del>
 */
export function Del(props: DelProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
