import type { SummaryElementProps } from "@fartlabs/ht/summary";
import { summary as render } from "@fartlabs/ht/summary";

export type { SummaryElementProps };

/**
 * SUMMARY component renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary>
 */
export function SUMMARY(
  props: SummaryElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
