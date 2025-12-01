/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeFuncAElementProps are the props for the [`feFuncA`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA>
 */
export interface FeFuncAElementProps extends GlobalAttributes {
}

/**
 * FE_FUNC_A renders the [`feFuncA`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFuncA>
 */
export function FE_FUNC_A(
  props?: FeFuncAElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFuncA",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
