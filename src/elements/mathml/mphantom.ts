/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MphantomElementProps are the props for the [`mphantom`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom>
 */
export interface MphantomElementProps extends GlobalAttributes {
}

/**
 * MPHANTOM renders the [`mphantom`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mphantom>
 */
export function MPHANTOM(
  props?: MphantomElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mphantom",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
