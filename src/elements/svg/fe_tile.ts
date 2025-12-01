/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeTileElementProps are the props for the [`feTile`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile>
 */
export interface FeTileElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feTile`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile#in>
   */
  in?: string | undefined;
}

/**
 * FE_TILE renders the [`feTile`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTile>
 */
export function FE_TILE(
  props?: FeTileElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feTile",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
