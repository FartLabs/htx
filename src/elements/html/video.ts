/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * VideoElementProps are the props for the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video>
 */
export interface VideoElementProps extends GlobalAttributes {
  /**
   * `autoplay` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#autoplay>
   */
  autoplay?: string | boolean | undefined;
  /**
   * `controls` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#controls>
   */
  controls?: string | boolean | undefined;
  /**
   * `controlslist` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#controlslist>
   */
  controlslist?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `disablepictureinpicture` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#disablepictureinpicture>
   */
  disablepictureinpicture?: string | undefined;
  /**
   * `disableremoteplayback` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#disableremoteplayback>
   */
  disableremoteplayback?: string | undefined;
  /**
   * `height` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#height>
   */
  height?: string | undefined;
  /**
   * `loop` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#loop>
   */
  loop?: string | boolean | undefined;
  /**
   * `muted` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#muted>
   */
  muted?: string | boolean | undefined;
  /**
   * `playsinline` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#playsinline>
   */
  playsinline?: string | boolean | undefined;
  /**
   * `poster` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#poster>
   */
  poster?: string | undefined;
  /**
   * `preload` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#preload>
   */
  preload?: string | undefined;
  /**
   * `src` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#src>
   */
  src?: string | undefined;
  /**
   * `width` is an attribute of the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video#width>
   */
  width?: string | undefined;
}

/**
 * VIDEO renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video>
 */
export function VIDEO(
  props?: VideoElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "video",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
