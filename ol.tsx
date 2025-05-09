import type { OlElementProps } from "@fartlabs/ht/ol";
import { ol as render } from "@fartlabs/ht/ol";

export type { OlElementProps };

/**
 * OL component renders the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol>
 */
export function OL(
  props: OlElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
