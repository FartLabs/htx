/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeFuncGElementProps are the props for the [`feFuncG`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG>
 */
export interface FeFuncGElementProps extends GlobalAttributes {
}

/**
 * FE_FUNC_G renders the [`feFuncG`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncG>
 */
export function FE_FUNC_G(
  props?: FeFuncGElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFuncG",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
