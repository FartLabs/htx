/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MerrorElementProps are the props for the [`merror`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/merror) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/merror>
 */
export interface MerrorElementProps extends GlobalAttributes {
}

/**
 * MERROR renders the [`merror`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/merror) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/merror>
 */
export function MERROR(
  props?: MerrorElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "merror",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
