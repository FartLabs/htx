/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ParamElementProps are the props for the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param>
 * @deprecated
 */
export interface ParamElementProps extends GlobalAttributes {
  /**
   * `name` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param#name>
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `type` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param#type>
   * @deprecated
   */
  type?: string | undefined;
  /**
   * `value` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param#value>
   * @deprecated
   */
  value?: string | undefined;
  /**
   * `valuetype` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param#valuetype>
   * @deprecated
   */
  valuetype?: string | undefined;
}

/**
 * PARAM renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param>
 * @deprecated
 */
export function PARAM(props?: ParamElementProps): string {
  return renderElement("param", props as AnyProps, true);
}
