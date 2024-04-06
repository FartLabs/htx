import type { FieldsetElementProps } from "@fartlabs/ht/fieldset";
import { fieldset as render } from "@fartlabs/ht/fieldset";

export type { FieldsetElementProps };

/**
 * FIELDSET component renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/fieldset>
 */
export function FIELDSET(
  props: FieldsetElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
