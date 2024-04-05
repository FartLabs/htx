import type { FieldsetProps } from "@fartlabs/ht/fieldset";
import { fieldset as render } from "@fartlabs/ht/fieldset";

export type { FieldsetProps };

/**
 * Fieldset renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/fieldset>
 */
export function Fieldset(
  props: FieldsetProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
