import type { HtmlProps } from "@fartlabs/ht/html";
import { html as render } from "@fartlabs/ht/html";

export type { HtmlProps };

/**
 * Html renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/html>
 */
export function Html(props: HtmlProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
