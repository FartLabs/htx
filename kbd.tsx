import type { KbdElementProps } from "@fartlabs/ht/kbd";
import { kbd as render } from "@fartlabs/ht/kbd";

export type { KbdElementProps };

/**
 * KBD component renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd>
 */
export function KBD(props: KbdElementProps & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
