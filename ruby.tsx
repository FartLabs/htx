import type { RubyElementProps } from "@fartlabs/ht/ruby";
import { ruby as render } from "@fartlabs/ht/ruby";

export type { RubyElementProps };

/**
 * RUBY component renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby>
 */
export function RUBY(
  props: RubyElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
