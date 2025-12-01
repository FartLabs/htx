/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MstyleElementProps are the props for the [`mstyle`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle>
 */
export interface MstyleElementProps extends GlobalAttributes {
  /**
   * `background` is an attribute of the [`mstyle`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle#background>
   * @deprecated
   */
  background?: string | undefined;
  /**
   * `color` is an attribute of the [`mstyle`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle#color>
   * @deprecated
   */
  color?: string | undefined;
  /**
   * `fontsize` is an attribute of the [`mstyle`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle#fontsize>
   * @deprecated
   */
  fontsize?: string | undefined;
  /**
   * `fontstyle` is an attribute of the [`mstyle`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle#fontstyle>
   * @deprecated
   */
  fontstyle?: string | undefined;
  /**
   * `fontweight` is an attribute of the [`mstyle`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle#fontweight>
   * @deprecated
   */
  fontweight?: string | undefined;
}

/**
 * MSTYLE renders the [`mstyle`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mstyle>
 */
export function MSTYLE(
  props?: MstyleElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mstyle",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
