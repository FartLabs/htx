/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeDistantLightElementProps are the props for the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight>
 */
export interface FeDistantLightElementProps extends GlobalAttributes {
  /**
   * `azimuth` is an attribute of the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight#azimuth>
   */
  azimuth?: string | undefined;
  /**
   * `elevation` is an attribute of the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight#elevation>
   */
  elevation?: string | undefined;
}

/**
 * FE_DISTANT_LIGHT renders the [`feDistantLight`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDistantLight>
 */
export function FE_DISTANT_LIGHT(
  props?: FeDistantLightElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feDistantLight",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
