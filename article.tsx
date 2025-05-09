import type { ArticleElementProps } from "@fartlabs/ht/article";
import { article as render } from "@fartlabs/ht/article";

export type { ArticleElementProps };

/**
 * ARTICLE component renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article>
 */
export function ARTICLE(props:
  & (ArticleElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
