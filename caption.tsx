import type { CaptionElementProps } from "@fartlabs/ht/caption";
import { caption as render } from "@fartlabs/ht/caption";

export type { CaptionElementProps };

/**
 * CAPTION component renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption>
 */
export function CAPTION(props:
  & (CaptionElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
