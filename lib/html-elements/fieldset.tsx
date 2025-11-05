import type { FieldsetElementProps } from "@fartlabs/ht/fieldset";
import { fieldset as render } from "@fartlabs/ht/fieldset";

export type { FieldsetElementProps };

/**
 * FIELDSET component renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset>
 */
export function FIELDSET(props:
  & (FieldsetElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
