import type { GlobalAttributes } from "@fartlabs/ht/lib/global_attributes.ts";
import { footer as render } from "@fartlabs/ht/footer";

export type { GlobalAttributes };

/**
 * Footer renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Element/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/footer>
 */
export function Footer(
  props: GlobalAttributes & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
