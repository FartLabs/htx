/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * LineElementProps are the props for the [`line`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line>
 */
export interface LineElementProps extends GlobalAttributes {
  /**
   * `systemLanguage` is an attribute of the [`line`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `x1` is an attribute of the [`line`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line#x1>
   */
  x1?: string | undefined;
  /**
   * `x2` is an attribute of the [`line`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line#x2>
   */
  x2?: string | undefined;
  /**
   * `y1` is an attribute of the [`line`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line#y1>
   */
  y1?: string | undefined;
  /**
   * `y2` is an attribute of the [`line`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line#y2>
   */
  y2?: string | undefined;
}

/**
 * LINE renders the [`line`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/line>
 */
export function LINE(props?: LineElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "line",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
