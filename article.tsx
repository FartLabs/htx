import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { article as render } from "@fartlabs/ht/article";

export type { GlobalAttributes };

/**
 * Article renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Element/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/article>
 */
export function Article(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
