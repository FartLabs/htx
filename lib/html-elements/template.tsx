import type { TemplateElementProps } from "@fartlabs/ht/template";
import { template as render } from "@fartlabs/ht/template";

export type { TemplateElementProps };

/**
 * TEMPLATE component renders the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template>
 */
export function TEMPLATE(props:
  & (TemplateElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
