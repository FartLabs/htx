/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MarkerElementProps are the props for the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker>
 */
export interface MarkerElementProps extends GlobalAttributes {
  /**
   * `markerHeight` is an attribute of the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker#markerHeight>
   */
  markerHeight?: string | undefined;
  /**
   * `markerUnits` is an attribute of the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker#markerUnits>
   */
  markerUnits?: string | undefined;
  /**
   * `markerWidth` is an attribute of the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker#markerWidth>
   */
  markerWidth?: string | undefined;
  /**
   * `orient` is an attribute of the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker#orient>
   */
  orient?: string | undefined;
  /**
   * `refX` is an attribute of the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker#refX>
   */
  refX?: string | undefined;
  /**
   * `refY` is an attribute of the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker#refY>
   */
  refY?: string | undefined;
  /**
   * `viewBox` is an attribute of the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker#viewBox>
   */
  viewBox?: string | undefined;
}

/**
 * MARKER renders the [`marker`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/marker>
 */
export function MARKER(
  props?: MarkerElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "marker",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
