/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * LinearGradientElementProps are the props for the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient>
 */
export interface LinearGradientElementProps extends GlobalAttributes {
  /**
   * `gradientTransform` is an attribute of the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient#gradientTransform>
   */
  gradientTransform?: string | undefined;
  /**
   * `gradientUnits` is an attribute of the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient#gradientUnits>
   */
  gradientUnits?: string | undefined;
  /**
   * `href` is an attribute of the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient#href>
   */
  href?: string | undefined;
  /**
   * `spreadMethod` is an attribute of the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient#spreadMethod>
   */
  spreadMethod?: string | undefined;
  /**
   * `x1` is an attribute of the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient#x1>
   */
  x1?: string | undefined;
  /**
   * `x2` is an attribute of the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient#x2>
   */
  x2?: string | undefined;
  /**
   * `y1` is an attribute of the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient#y1>
   */
  y1?: string | undefined;
  /**
   * `y2` is an attribute of the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient#y2>
   */
  y2?: string | undefined;
}

/**
 * LINEAR_GRADIENT renders the [`linearGradient`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/linearGradient>
 */
export function LINEAR_GRADIENT(
  props?: LinearGradientElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "linearGradient",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
