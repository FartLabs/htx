/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TrElementProps are the props for the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr>
 */
export interface TrElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * TR renders the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr>
 */
export function TR(props?: TrElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tr",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
