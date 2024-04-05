import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { main as render } from "@fartlabs/ht/main";

export type { GlobalAttributes };

/**
 * Main renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Element/main) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/main>
 */
export function Main(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
