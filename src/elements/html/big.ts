/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BigElementProps are the props for the [`big`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big>
 * @deprecated
 */
export interface BigElementProps extends GlobalAttributes {
}

/**
 * BIG renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big>
 * @deprecated
 */
export function BIG(props?: BigElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "big",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
