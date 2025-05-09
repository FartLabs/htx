import type { CodeElementProps } from "@fartlabs/ht/code";
import { code as render } from "@fartlabs/ht/code";

export type { CodeElementProps };

/**
 * CODE component renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code>
 */
export function CODE(
  props: CodeElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
