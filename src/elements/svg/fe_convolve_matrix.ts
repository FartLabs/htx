/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeConvolveMatrixElementProps are the props for the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix>
 */
export interface FeConvolveMatrixElementProps extends GlobalAttributes {
  /**
   * `bias` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#bias>
   */
  bias?: string | undefined;
  /**
   * `divisor` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#divisor>
   */
  divisor?: string | undefined;
  /**
   * `edgeMode` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#edgeMode>
   */
  edgeMode?: string | undefined;
  /**
   * `in` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#in>
   */
  in?: string | undefined;
  /**
   * `kernelMatrix` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#kernelMatrix>
   */
  kernelMatrix?: string | undefined;
  /**
   * `kernelUnitLength` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#kernelUnitLength>
   */
  kernelUnitLength?: string | undefined;
  /**
   * `order` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#order>
   */
  order?: string | undefined;
  /**
   * `preserveAlpha` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#preserveAlpha>
   */
  preserveAlpha?: string | undefined;
  /**
   * `targetX` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#targetX>
   */
  targetX?: string | undefined;
  /**
   * `targetY` is an attribute of the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix#targetY>
   */
  targetY?: string | undefined;
}

/**
 * FE_CONVOLVE_MATRIX renders the [`feConvolveMatrix`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feConvolveMatrix>
 */
export function FE_CONVOLVE_MATRIX(
  props?: FeConvolveMatrixElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feConvolveMatrix",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
