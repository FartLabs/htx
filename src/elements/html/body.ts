/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BodyElementProps are the props for the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body>
 */
export interface BodyElementProps extends GlobalAttributes {
  /**
   * `alink` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#alink>
   * @deprecated
   */
  alink?: string | undefined;
  /**
   * `background` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#background>
   * @deprecated
   */
  background?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `bottommargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#bottommargin>
   * @deprecated
   */
  bottommargin?: string | undefined;
  /**
   * `leftmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#leftmargin>
   * @deprecated
   */
  leftmargin?: string | undefined;
  /**
   * `link` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#link>
   * @deprecated
   */
  link?: string | undefined;
  /**
   * `rightmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#rightmargin>
   * @deprecated
   */
  rightmargin?: string | undefined;
  /**
   * `text` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#text>
   * @deprecated
   */
  text?: string | undefined;
  /**
   * `topmargin` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#topmargin>
   * @deprecated
   */
  topmargin?: string | undefined;
  /**
   * `vlink` is an attribute of the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body#vlink>
   * @deprecated
   */
  vlink?: string | undefined;
}

/**
 * BODY renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body>
 */
export function BODY(props?: BodyElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "body",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
