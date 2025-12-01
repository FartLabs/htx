/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ColgroupElementProps are the props for the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup>
 */
export interface ColgroupElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `char` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `span` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup#span>
   */
  span?: string | undefined;
  /**
   * `valign` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup#valign>
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * COLGROUP renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup>
 */
export function COLGROUP(
  props?: ColgroupElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "colgroup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
