/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BdoElementProps are the props for the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo>
 */
export interface BdoElementProps extends GlobalAttributes {
}

/**
 * BDO renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo>
 */
export function BDO(props?: BdoElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "bdo",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
