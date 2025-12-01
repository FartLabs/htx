/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TspanElementProps are the props for the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan>
 */
export interface TspanElementProps extends GlobalAttributes {
  /**
   * `dx` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#dx>
   */
  dx?: string | undefined;
  /**
   * `dy` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#dy>
   */
  dy?: string | undefined;
  /**
   * `fill` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#fill>
   */
  fill?: string | undefined;
  /**
   * `lengthAdjust` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#lengthAdjust>
   */
  lengthAdjust?: string | undefined;
  /**
   * `rotate` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#rotate>
   */
  rotate?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `textLength` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#textLength>
   */
  textLength?: string | undefined;
  /**
   * `x` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan#y>
   */
  y?: string | undefined;
}

/**
 * TSPAN renders the [`tspan`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/tspan>
 */
export function TSPAN(
  props?: TspanElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tspan",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
