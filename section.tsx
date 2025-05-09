import type { SectionElementProps } from "@fartlabs/ht/section";
import { section as render } from "@fartlabs/ht/section";

export type { SectionElementProps };

/**
 * SECTION component renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section>
 */
export function SECTION(
  props: SectionElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
