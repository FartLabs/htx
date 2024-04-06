import type { DtElementProps } from "@fartlabs/ht/dt";
import { dt as render } from "@fartlabs/ht/dt";

export type { DtElementProps };

/**
 * DT component renders the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Element/dt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dt>
 */
export function DT(
  props: DtElementProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
