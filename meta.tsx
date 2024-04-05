import type { MetaProps } from "@fartlabs/ht/meta";
import { meta as render } from "@fartlabs/ht/meta";

export type { MetaProps };

/**
 * Meta renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meta>
 */
export function Meta(props: MetaProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest);
}
