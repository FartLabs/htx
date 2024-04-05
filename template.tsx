import type { TemplateProps } from "@fartlabs/ht/template";
import { template as render } from "@fartlabs/ht/template";

export type { TemplateProps };

/**
 * Template renders the [`template`](https://developer.mozilla.org/docs/Web/HTML/Element/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/template>
 */
export function Template(
  props: TemplateProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
