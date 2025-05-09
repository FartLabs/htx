import type { FormElementProps } from "@fartlabs/ht/form";
import { form as render } from "@fartlabs/ht/form";

export type { FormElementProps };

/**
 * FORM component renders the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form>
 */
export function FORM(
  props: FormElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
