/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BlockquoteElementProps are the props for the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote>
 */
export interface BlockquoteElementProps extends GlobalAttributes {
  /**
   * `cite` is an attribute of the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote#cite>
   */
  cite?: string | undefined;
}

/**
 * BLOCKQUOTE renders the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote>
 */
export function BLOCKQUOTE(
  props?: BlockquoteElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "blockquote",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
