/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * QElementProps are the props for the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q>
 */
export interface QElementProps extends GlobalAttributes {
  /**
   * `cite` is an attribute of the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q#cite>
   */
  cite?: string | undefined;
}

/**
 * Q renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q>
 */
export function Q(props?: QElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "q",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
