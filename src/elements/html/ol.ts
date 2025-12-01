/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * OlElementProps are the props for the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol>
 */
export interface OlElementProps extends GlobalAttributes {
  /**
   * `compact` is an attribute of the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol#compact>
   * @deprecated
   */
  compact?: string | undefined;
  /**
   * `reversed` is an attribute of the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol#reversed>
   */
  reversed?: string | boolean | undefined;
  /**
   * `start` is an attribute of the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol#start>
   */
  start?: string | undefined;
  /**
   * `type` is an attribute of the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol#type>
   */
  type?: string | undefined;
}

/**
 * OL renders the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol>
 */
export function OL(props?: OlElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ol",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
