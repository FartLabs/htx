import type { DirProps } from "@fartlabs/ht/dir";
import { dir as render } from "@fartlabs/ht/dir";

export type { DirProps };

/**
 * Dir renders the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Element/dir) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dir>
 * @deprecated
 */
export function Dir(props: DirProps & { children?: string[] } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
