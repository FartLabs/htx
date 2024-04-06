import type { ScriptElementProps } from "@fartlabs/ht/script";
import { script as render } from "@fartlabs/ht/script";

export type { ScriptElementProps };

/**
 * SCRIPT component renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/script>
 */
export function SCRIPT(
  props: ScriptElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
