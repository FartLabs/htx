/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * PatternElementProps are the props for the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern>
 */
export interface PatternElementProps extends GlobalAttributes {
  /**
   * `height` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#height>
   */
  height?: string | undefined;
  /**
   * `href` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#href>
   */
  href?: string | undefined;
  /**
   * `patternContentUnits` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#patternContentUnits>
   */
  patternContentUnits?: string | undefined;
  /**
   * `patternTransform` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#patternTransform>
   */
  patternTransform?: string | undefined;
  /**
   * `patternUnits` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#patternUnits>
   */
  patternUnits?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `width` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#width>
   */
  width?: string | undefined;
  /**
   * `x` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern#y>
   */
  y?: string | undefined;
}

/**
 * PATTERN renders the [`pattern`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/pattern>
 */
export function PATTERN(
  props?: PatternElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "pattern",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
