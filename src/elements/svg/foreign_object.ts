/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ForeignObjectElementProps are the props for the [`foreignObject`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject>
 */
export interface ForeignObjectElementProps extends GlobalAttributes {
  /**
   * `height` is an attribute of the [`foreignObject`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject#height>
   */
  height?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`foreignObject`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `width` is an attribute of the [`foreignObject`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject#width>
   */
  width?: string | undefined;
  /**
   * `x` is an attribute of the [`foreignObject`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`foreignObject`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject#y>
   */
  y?: string | undefined;
}

/**
 * FOREIGN_OBJECT renders the [`foreignObject`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/foreignObject>
 */
export function FOREIGN_OBJECT(
  props?: ForeignObjectElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "foreignObject",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
