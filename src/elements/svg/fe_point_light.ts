/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FePointLightElementProps are the props for the [`fePointLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight>
 */
export interface FePointLightElementProps extends GlobalAttributes {
  /**
   * `x` is an attribute of the [`fePointLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`fePointLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight#y>
   */
  y?: string | undefined;
  /**
   * `z` is an attribute of the [`fePointLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight#z>
   */
  z?: string | undefined;
}

/**
 * FE_POINT_LIGHT renders the [`fePointLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/fePointLight>
 */
export function FE_POINT_LIGHT(
  props?: FePointLightElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "fePointLight",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
