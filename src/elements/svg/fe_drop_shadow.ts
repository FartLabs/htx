/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeDropShadowElementProps are the props for the [`feDropShadow`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow>
 */
export interface FeDropShadowElementProps extends GlobalAttributes {
  /**
   * `dx` is an attribute of the [`feDropShadow`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow#dx>
   */
  dx?: string | undefined;
  /**
   * `dy` is an attribute of the [`feDropShadow`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow#dy>
   */
  dy?: string | undefined;
  /**
   * `in` is an attribute of the [`feDropShadow`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow#in>
   */
  in?: string | undefined;
  /**
   * `stdDeviation` is an attribute of the [`feDropShadow`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow#stdDeviation>
   */
  stdDeviation?: string | undefined;
}

/**
 * FE_DROP_SHADOW renders the [`feDropShadow`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDropShadow>
 */
export function FE_DROP_SHADOW(
  props?: FeDropShadowElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feDropShadow",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
