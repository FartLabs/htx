/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SupElementProps are the props for the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup>
 */
export interface SupElementProps extends GlobalAttributes {
}

/**
 * SUP renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup>
 */
export function SUP(props?: SupElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "sup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
