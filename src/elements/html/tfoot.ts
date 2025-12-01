/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TfootElementProps are the props for the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot>
 */
export interface TfootElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * TFOOT renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot>
 */
export function TFOOT(
  props?: TfootElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tfoot",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
