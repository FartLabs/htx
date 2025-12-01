/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeFuncRElementProps are the props for the [`feFuncR`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR>
 */
export interface FeFuncRElementProps extends GlobalAttributes {
}

/**
 * FE_FUNC_R renders the [`feFuncR`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncR>
 */
export function FE_FUNC_R(
  props?: FeFuncRElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFuncR",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
