/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MunderElementProps are the props for the [`munder`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munder) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munder>
 */
export interface MunderElementProps extends GlobalAttributes {
  /**
   * `accentunder` is an attribute of the [`munder`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munder) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munder#accentunder>
   */
  accentunder?: string | undefined;
}

/**
 * MUNDER renders the [`munder`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munder) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munder>
 */
export function MUNDER(
  props?: MunderElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "munder",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
