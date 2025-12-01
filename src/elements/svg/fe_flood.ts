/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeFloodElementProps are the props for the [`feFlood`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood>
 */
export interface FeFloodElementProps extends GlobalAttributes {
}

/**
 * FE_FLOOD renders the [`feFlood`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feFlood>
 */
export function FE_FLOOD(
  props?: FeFloodElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feFlood",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
