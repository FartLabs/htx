/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeSpecularLightingElementProps are the props for the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting>
 */
export interface FeSpecularLightingElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#in>
   */
  in?: string | undefined;
  /**
   * `kernelUnitLength` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#kernelUnitLength>
   */
  kernelUnitLength?: string | undefined;
  /**
   * `specularConstant` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#specularConstant>
   */
  specularConstant?: string | undefined;
  /**
   * `specularExponent` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#specularExponent>
   */
  specularExponent?: string | undefined;
  /**
   * `surfaceScale` is an attribute of the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting#surfaceScale>
   */
  surfaceScale?: string | undefined;
}

/**
 * FE_SPECULAR_LIGHTING renders the [`feSpecularLighting`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpecularLighting>
 */
export function FE_SPECULAR_LIGHTING(
  props?: FeSpecularLightingElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feSpecularLighting",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
