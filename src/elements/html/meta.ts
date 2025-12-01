/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MetaElementProps are the props for the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta>
 */
export interface MetaElementProps extends GlobalAttributes {
  /**
   * `charset` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#charset>
   */
  charset?: string | undefined;
  /**
   * `content` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#content>
   */
  content?: string | undefined;
  /**
   * `http-equiv` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#http-equiv>
   */
  "http-equiv"?: string | undefined;
  /**
   * `name` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#name>
   */
  name?: string | undefined;
  /**
   * `scheme` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#scheme>
   * @deprecated
   */
  scheme?: string | undefined;
}

/**
 * META renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta>
 */
export function META(props?: MetaElementProps): string {
  return renderElement("meta", props as AnyProps, true);
}
