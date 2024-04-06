import type { CodeElementProps } from "@fartlabs/ht/code";
import { code as render } from "@fartlabs/ht/code";

export type { CodeElementProps };

/**
 * CODE component renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Element/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/code>
 */
export function CODE(
  props: CodeElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
