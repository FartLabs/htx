import type { FooterElementProps } from "@fartlabs/ht/footer";
import { footer as render } from "@fartlabs/ht/footer";

export type { FooterElementProps };

/**
 * FOOTER component renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer>
 */
export function FOOTER(
  props: FooterElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
