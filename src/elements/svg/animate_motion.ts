/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AnimateMotionElementProps are the props for the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion>
 */
export interface AnimateMotionElementProps extends GlobalAttributes {
  /**
   * `calcMode` is an attribute of the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion#calcMode>
   */
  calcMode?: string | undefined;
  /**
   * `fill` is an attribute of the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion#fill>
   */
  fill?: string | undefined;
  /**
   * `href` is an attribute of the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion#href>
   */
  href?: string | undefined;
  /**
   * `keyPoints` is an attribute of the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion#keyPoints>
   */
  keyPoints?: string | undefined;
  /**
   * `origin` is an attribute of the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion#origin>
   */
  origin?: string | undefined;
  /**
   * `path` is an attribute of the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion#path>
   */
  path?: string | undefined;
  /**
   * `rotate` is an attribute of the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion#rotate>
   */
  rotate?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * ANIMATE_MOTION renders the [`animateMotion`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animateMotion>
 */
export function ANIMATE_MOTION(
  props?: AnimateMotionElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "animateMotion",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
