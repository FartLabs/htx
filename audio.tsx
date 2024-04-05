import type { AudioProps } from "@fartlabs/ht/audio";
import { audio as render } from "@fartlabs/ht/audio";

export type { AudioProps };

/**
 * Audio renders the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/audio>
 */
export function Audio(
  props: AudioProps & { children?: string[] } = {},
): string {
  const { children, ...rest } = props;
  return render(rest, ...(children ?? []));
}
