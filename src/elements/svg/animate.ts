/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AnimateElementProps are the props for the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate>
 */
export interface AnimateElementProps extends GlobalAttributes {
  /**
   * `attributeName` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#attributeName>
   */
  attributeName?: string | undefined;
  /**
   * `attributeType` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#attributeType>
   */
  attributeType?: string | undefined;
  /**
   * `dur` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#dur>
   */
  dur?: string | undefined;
  /**
   * `fill` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#fill>
   */
  fill?: string | undefined;
  /**
   * `from` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#from>
   */
  from?: string | undefined;
  /**
   * `href` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#href>
   */
  href?: string | undefined;
  /**
   * `repeatCount` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#repeatCount>
   */
  repeatCount?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `to` is an attribute of the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate#to>
   */
  to?: string | undefined;
}

/**
 * ANIMATE renders the [`animate`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/animate>
 */
export function ANIMATE(
  props?: AnimateElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "animate",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
