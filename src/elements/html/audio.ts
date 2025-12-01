/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AudioElementProps are the props for the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio>
 */
export interface AudioElementProps extends GlobalAttributes {
  /**
   * `controls` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#controls>
   */
  controls?: string | boolean | undefined;
  /**
   * `controlslist` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#controlslist>
   */
  controlslist?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `disableremoteplayback` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#disableremoteplayback>
   */
  disableremoteplayback?: string | undefined;
  /**
   * `loop` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#loop>
   */
  loop?: string | boolean | undefined;
  /**
   * `muted` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#muted>
   */
  muted?: string | boolean | undefined;
  /**
   * `preload` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#preload>
   */
  preload?: string | undefined;
  /**
   * `src` is an attribute of the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio#src>
   */
  src?: string | undefined;
}

/**
 * AUDIO renders the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio>
 */
export function AUDIO(
  props?: AudioElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "audio",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
