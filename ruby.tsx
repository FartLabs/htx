import type { RubyElementProps } from "@fartlabs/ht/ruby";
import { ruby as render } from "@fartlabs/ht/ruby";

export type { RubyElementProps };

/**
 * RUBY component renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ruby>
 */
export function RUBY(
  props: RubyElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
