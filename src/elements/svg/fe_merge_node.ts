/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeMergeNodeElementProps are the props for the [`feMergeNode`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode>
 */
export interface FeMergeNodeElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feMergeNode`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode#in>
   */
  in?: string | undefined;
}

/**
 * FE_MERGE_NODE renders the [`feMergeNode`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode>
 */
export function FE_MERGE_NODE(
  props?: FeMergeNodeElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feMergeNode",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
