/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeMorphologyElementProps are the props for the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology>
 */
export interface FeMorphologyElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology#in>
   */
  in?: string | undefined;
  /**
   * `operator` is an attribute of the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology#operator>
   */
  operator?: string | undefined;
  /**
   * `radius` is an attribute of the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology#radius>
   */
  radius?: string | undefined;
}

/**
 * FE_MORPHOLOGY renders the [`feMorphology`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMorphology>
 */
export function FE_MORPHOLOGY(
  props?: FeMorphologyElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feMorphology",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
