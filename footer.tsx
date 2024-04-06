import type { FooterElementProps } from "@fartlabs/ht/footer";
import { footer as render } from "@fartlabs/ht/footer";

export type { FooterElementProps };

/**
 * FOOTER component renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Element/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/footer>
 */
export function FOOTER(
  props: FooterElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
