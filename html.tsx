import type { HtmlElementProps } from "@fartlabs/ht/html";
import { html as render } from "@fartlabs/ht/html";

export type { HtmlElementProps };

/**
 * HTML component renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/html>
 */
export function HTML(
  props: HtmlElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
