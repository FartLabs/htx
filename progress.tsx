import type { ProgressProps } from "@fartlabs/ht/progress";
import { progress as render } from "@fartlabs/ht/progress";

export type { ProgressProps };

/**
 * Progress renders the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/progress>
 */
export function Progress(
  props: ProgressProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
