/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TbodyElementProps are the props for the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody>
 */
export interface TbodyElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * TBODY renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody>
 */
export function TBODY(
  props?: TbodyElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "tbody",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
