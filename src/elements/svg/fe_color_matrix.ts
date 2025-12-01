/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeColorMatrixElementProps are the props for the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix>
 */
export interface FeColorMatrixElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix#in>
   */
  in?: string | undefined;
  /**
   * `type` is an attribute of the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix#type>
   */
  type?: string | undefined;
  /**
   * `values` is an attribute of the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix#values>
   */
  values?: string | undefined;
}

/**
 * FE_COLOR_MATRIX renders the [`feColorMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feColorMatrix>
 */
export function FE_COLOR_MATRIX(
  props?: FeColorMatrixElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feColorMatrix",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
