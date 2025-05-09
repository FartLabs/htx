import type { ProgressElementProps } from "@fartlabs/ht/progress";
import { progress as render } from "@fartlabs/ht/progress";

export type { ProgressElementProps };

/**
 * PROGRESS component renders the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress>
 */
export function PROGRESS(
  props: ProgressElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
