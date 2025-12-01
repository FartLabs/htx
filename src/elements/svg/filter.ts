/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FilterElementProps are the props for the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter>
 */
export interface FilterElementProps extends GlobalAttributes {
  /**
   * `filterUnits` is an attribute of the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter#filterUnits>
   */
  filterUnits?: string | undefined;
  /**
   * `height` is an attribute of the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter#height>
   */
  height?: string | undefined;
  /**
   * `primitiveUnits` is an attribute of the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter#primitiveUnits>
   */
  primitiveUnits?: string | undefined;
  /**
   * `width` is an attribute of the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter#width>
   */
  width?: string | undefined;
  /**
   * `x` is an attribute of the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter#y>
   */
  y?: string | undefined;
}

/**
 * FILTER renders the [`filter`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/filter>
 */
export function FILTER(
  props?: FilterElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "filter",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
