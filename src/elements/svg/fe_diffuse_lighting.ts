/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeDiffuseLightingElementProps are the props for the [`feDiffuseLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting>
 */
export interface FeDiffuseLightingElementProps extends GlobalAttributes {
  /**
   * `diffuseConstant` is an attribute of the [`feDiffuseLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting#diffuseConstant>
   */
  diffuseConstant?: string | undefined;
  /**
   * `in` is an attribute of the [`feDiffuseLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting#in>
   */
  in?: string | undefined;
  /**
   * `kernelUnitLength` is an attribute of the [`feDiffuseLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting#kernelUnitLength>
   */
  kernelUnitLength?: string | undefined;
  /**
   * `surfaceScale` is an attribute of the [`feDiffuseLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting#surfaceScale>
   */
  surfaceScale?: string | undefined;
}

/**
 * FE_DIFFUSE_LIGHTING renders the [`feDiffuseLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDiffuseLighting>
 */
export function FE_DIFFUSE_LIGHTING(
  props?: FeDiffuseLightingElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feDiffuseLighting",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
