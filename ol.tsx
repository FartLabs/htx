import type { OlProps } from "@fartlabs/ht/ol";
import { ol as render } from "@fartlabs/ht/ol";

export type { OlProps };

/**
 * Ol renders the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Element/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ol>
 */
export function Ol(props: OlProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
