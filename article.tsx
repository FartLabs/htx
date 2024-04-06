import type { ArticleElementProps } from "@fartlabs/ht/article";
import { article as render } from "@fartlabs/ht/article";

export type { ArticleElementProps };

/**
 * ARTICLE component renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Element/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/article>
 */
export function ARTICLE(
  props: ArticleElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
