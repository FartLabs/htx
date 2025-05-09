import type { TitleElementProps } from "@fartlabs/ht/title";
import { title as render } from "@fartlabs/ht/title";

export type { TitleElementProps };

/**
 * TITLE component renders the [`title`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title>
 */
export function TITLE(
  props: TitleElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
