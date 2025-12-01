/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SymbolElementProps are the props for the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol>
 */
export interface SymbolElementProps extends GlobalAttributes {
  /**
   * `preserveAspectRatio` is an attribute of the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol#preserveAspectRatio>
   */
  preserveAspectRatio?: string | undefined;
  /**
   * `viewBox` is an attribute of the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol#viewBox>
   */
  viewBox?: string | undefined;
}

/**
 * SYMBOL renders the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol>
 */
export function SYMBOL(
  props?: SymbolElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "symbol",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
