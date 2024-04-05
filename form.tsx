import type { FormProps } from "@fartlabs/ht/form";
import { form as render } from "@fartlabs/ht/form";

export type { FormProps };

/**
 * Form renders the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form>
 */
export function Form(props: FormProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
