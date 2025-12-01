/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TableElementProps are the props for the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table>
 */
export interface TableElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `border` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#border>
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `cellpadding` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#cellpadding>
   * @deprecated
   */
  cellpadding?: string | undefined;
  /**
   * `cellspacing` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#cellspacing>
   * @deprecated
   */
  cellspacing?: string | undefined;
  /**
   * `frame` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#frame>
   * @deprecated
   */
  frame?: string | undefined;
  /**
   * `rules` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#rules>
   * @deprecated
   */
  rules?: string | undefined;
  /**
   * `summary` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#summary>
   * @deprecated
   */
  summary?: string | undefined;
  /**
   * `width` is an attribute of the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * TABLE renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table>
 */
export function TABLE(
  props?: TableElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "table",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
