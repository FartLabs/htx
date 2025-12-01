/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SemanticsElementProps are the props for the [`semantics`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/semantics) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/semantics>
 */
export interface SemanticsElementProps extends GlobalAttributes {
}

/**
 * SEMANTICS renders the [`semantics`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/semantics) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/semantics>
 */
export function SEMANTICS(
  props?: SemanticsElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "semantics",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
