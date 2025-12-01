/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MnElementProps are the props for the [`mn`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mn) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mn>
 */
export interface MnElementProps extends GlobalAttributes {
}

/**
 * MN renders the [`mn`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mn) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mn>
 */
export function MN(props?: MnElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mn",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
