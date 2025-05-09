import type { DtElementProps } from "@fartlabs/ht/dt";
import { dt as render } from "@fartlabs/ht/dt";

export type { DtElementProps };

/**
 * DT component renders the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt>
 */
export function DT(props: DtElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
