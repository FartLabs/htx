import type { ScriptProps } from "@fartlabs/ht/script";
import { script as render } from "@fartlabs/ht/script";

export type { ScriptProps };

/**
 * Script renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script>
 */
export function Script(
  props: ScriptProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
