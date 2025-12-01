/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * RadialGradientElementProps are the props for the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient>
 */
export interface RadialGradientElementProps extends GlobalAttributes {
  /**
   * `cx` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#cx>
   */
  cx?: string | undefined;
  /**
   * `cy` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#cy>
   */
  cy?: string | undefined;
  /**
   * `fr` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#fr>
   */
  fr?: string | undefined;
  /**
   * `fx` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#fx>
   */
  fx?: string | undefined;
  /**
   * `fy` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#fy>
   */
  fy?: string | undefined;
  /**
   * `gradientTransform` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#gradientTransform>
   */
  gradientTransform?: string | undefined;
  /**
   * `gradientUnits` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#gradientUnits>
   */
  gradientUnits?: string | undefined;
  /**
   * `href` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#href>
   */
  href?: string | undefined;
  /**
   * `r` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#r>
   */
  r?: string | undefined;
  /**
   * `spreadMethod` is an attribute of the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient#spreadMethod>
   */
  spreadMethod?: string | undefined;
}

/**
 * RADIAL_GRADIENT renders the [`radialGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/radialGradient>
 */
export function RADIAL_GRADIENT(
  props?: RadialGradientElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "radialGradient",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
