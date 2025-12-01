/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MsqrtElementProps are the props for the [`msqrt`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msqrt) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msqrt>
 */
export interface MsqrtElementProps extends GlobalAttributes {
}

/**
 * MSQRT renders the [`msqrt`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msqrt) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msqrt>
 */
export function MSQRT(
  props?: MsqrtElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "msqrt",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
