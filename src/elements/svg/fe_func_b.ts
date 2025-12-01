/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeFuncBElementProps are the props for the [`feFuncB`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB>
 */
export interface FeFuncBElementProps extends GlobalAttributes {
}

/**
 * FE_FUNC_B renders the [`feFuncB`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncB>
 */
export function FE_FUNC_B(
  props?: FeFuncBElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFuncB",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
