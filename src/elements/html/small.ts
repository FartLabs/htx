/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SmallElementProps are the props for the [`small`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small>
 */
export interface SmallElementProps extends GlobalAttributes {
}

/**
 * SMALL renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small>
 */
export function SMALL(
  props?: SmallElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "small",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
