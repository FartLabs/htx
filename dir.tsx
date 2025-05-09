import type { DirElementProps } from "@fartlabs/ht/dir";
import { dir as render } from "@fartlabs/ht/dir";

export type { DirElementProps };

/**
 * DIR component renders the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir>
 * @deprecated
 */
export function DIR(props:
  & (DirElementProps) // deno-lint-ignore no-explicit-any
  & { children?: any } = {}): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
