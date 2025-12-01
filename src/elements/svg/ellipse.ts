/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * EllipseElementProps are the props for the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse>
 */
export interface EllipseElementProps extends GlobalAttributes {
  /**
   * `cx` is an attribute of the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse#cx>
   */
  cx?: string | undefined;
  /**
   * `cy` is an attribute of the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse#cy>
   */
  cy?: string | undefined;
  /**
   * `fill` is an attribute of the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse#fill>
   */
  fill?: string | undefined;
  /**
   * `rx` is an attribute of the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse#rx>
   */
  rx?: string | undefined;
  /**
   * `ry` is an attribute of the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse#ry>
   */
  ry?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * ELLIPSE renders the [`ellipse`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/ellipse>
 */
export function ELLIPSE(
  props?: EllipseElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ellipse",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
