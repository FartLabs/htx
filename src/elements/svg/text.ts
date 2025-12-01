/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TextElementProps are the props for the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text>
 */
export interface TextElementProps extends GlobalAttributes {
  /**
   * `dx` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#dx>
   */
  dx?: string | undefined;
  /**
   * `dy` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#dy>
   */
  dy?: string | undefined;
  /**
   * `fill` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#fill>
   */
  fill?: string | undefined;
  /**
   * `lengthAdjust` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#lengthAdjust>
   */
  lengthAdjust?: string | undefined;
  /**
   * `rotate` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#rotate>
   */
  rotate?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `textLength` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#textLength>
   */
  textLength?: string | undefined;
  /**
   * `x` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text#y>
   */
  y?: string | undefined;
}

/**
 * TEXT renders the [`text`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/text>
 */
export function TEXT(props?: TextElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "text",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
