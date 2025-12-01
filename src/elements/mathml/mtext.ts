/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MtextElementProps are the props for the [`mtext`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtext) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtext>
 */
export interface MtextElementProps extends GlobalAttributes {
}

/**
 * MTEXT renders the [`mtext`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtext) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtext>
 */
export function MTEXT(
  props?: MtextElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mtext",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
