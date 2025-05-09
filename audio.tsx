import type { AudioElementProps } from "@fartlabs/ht/audio";
import { audio as render } from "@fartlabs/ht/audio";

export type { AudioElementProps };

/**
 * AUDIO component renders the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio>
 */
export function AUDIO(
  props: AudioElementProps & { children?: any } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
