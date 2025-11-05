import type { ScriptElementProps } from "@fartlabs/ht/script";
import { script as render } from "@fartlabs/ht/script";

export type { ScriptElementProps };

/**
 * SCRIPT component renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script>
 */
export function SCRIPT(props:
  & (ScriptElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
