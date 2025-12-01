/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AnimateTransformElementProps are the props for the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform>
 */
export interface AnimateTransformElementProps extends GlobalAttributes {
  /**
   * `by` is an attribute of the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform#by>
   */
  by?: string | undefined;
  /**
   * `fill` is an attribute of the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform#fill>
   */
  fill?: string | undefined;
  /**
   * `from` is an attribute of the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform#from>
   */
  from?: string | undefined;
  /**
   * `href` is an attribute of the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform#href>
   */
  href?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `to` is an attribute of the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform#to>
   */
  to?: string | undefined;
  /**
   * `type` is an attribute of the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform#type>
   */
  type?: string | undefined;
}

/**
 * ANIMATE_TRANSFORM renders the [`animateTransform`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateTransform>
 */
export function ANIMATE_TRANSFORM(
  props?: AnimateTransformElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "animateTransform",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
