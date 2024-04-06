import type { MainElementProps } from "@fartlabs/ht/main";
import { main as render } from "@fartlabs/ht/main";

export type { MainElementProps };

/**
 * MAIN component renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Element/main) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/main>
 */
export function MAIN(
  props: MainElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
