import type { DataProps } from "@fartlabs/ht/data";
import { data as render } from "@fartlabs/ht/data";

export type { DataProps };

/**
 * Data renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/data>
 */
export function Data(props: DataProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
