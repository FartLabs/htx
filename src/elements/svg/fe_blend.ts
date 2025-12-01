/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeBlendElementProps are the props for the [`feBlend`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend>
 */
export interface FeBlendElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feBlend`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend#in>
   */
  in?: string | undefined;
  /**
   * `in2` is an attribute of the [`feBlend`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend#in2>
   */
  in2?: string | undefined;
  /**
   * `mode` is an attribute of the [`feBlend`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend#mode>
   */
  mode?: string | undefined;
}

/**
 * FE_BLEND renders the [`feBlend`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feBlend>
 */
export function FE_BLEND(
  props?: FeBlendElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feBlend",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
