/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MfencedElementProps are the props for the [`mfenced`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced>
 * @deprecated
 */
export interface MfencedElementProps extends GlobalAttributes {
}

/**
 * MFENCED renders the [`mfenced`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfenced>
 * @deprecated
 */
export function MFENCED(
  props?: MfencedElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mfenced",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
