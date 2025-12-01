/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeSpotLightElementProps are the props for the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight>
 */
export interface FeSpotLightElementProps extends GlobalAttributes {
  /**
   * `limitingConeAngle` is an attribute of the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight#limitingConeAngle>
   */
  limitingConeAngle?: string | undefined;
  /**
   * `pointsAtX` is an attribute of the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight#pointsAtX>
   */
  pointsAtX?: string | undefined;
  /**
   * `pointsAtY` is an attribute of the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight#pointsAtY>
   */
  pointsAtY?: string | undefined;
  /**
   * `pointsAtZ` is an attribute of the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight#pointsAtZ>
   */
  pointsAtZ?: string | undefined;
  /**
   * `specularExponent` is an attribute of the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight#specularExponent>
   */
  specularExponent?: string | undefined;
  /**
   * `x` is an attribute of the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight#y>
   */
  y?: string | undefined;
  /**
   * `z` is an attribute of the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight#z>
   */
  z?: string | undefined;
}

/**
 * FE_SPOT_LIGHT renders the [`feSpotLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feSpotLight>
 */
export function FE_SPOT_LIGHT(
  props?: FeSpotLightElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feSpotLight",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
