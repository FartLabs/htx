import type { CaptionProps } from "@fartlabs/ht/caption";
import { caption as render } from "@fartlabs/ht/caption";

export type { CaptionProps };

/**
 * Caption renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Element/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/caption>
 */
export function Caption(
  props: CaptionProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
