/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ClipPathElementProps are the props for the [`clipPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath>
 */
export interface ClipPathElementProps extends GlobalAttributes {
  /**
   * `clipPathUnits` is an attribute of the [`clipPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath#clipPathUnits>
   */
  clipPathUnits?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`clipPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * CLIP_PATH renders the [`clipPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/clipPath>
 */
export function CLIP_PATH(
  props?: ClipPathElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "clipPath",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
