/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * CanvasElementProps are the props for the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas>
 */
export interface CanvasElementProps extends GlobalAttributes {
  /**
   * `height` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas#height>
   */
  height?: string | undefined;
  /**
   * `moz-opaque` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas#moz-opaque>
   * @deprecated
   */
  "moz-opaque"?: string | undefined;
  /**
   * `width` is an attribute of the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas#width>
   */
  width?: string | undefined;
}

/**
 * CANVAS renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas>
 */
export function CANVAS(
  props?: CanvasElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "canvas",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
