/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * CenterElementProps are the props for the [`center`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center>
 * @deprecated
 */
export interface CenterElementProps extends GlobalAttributes {
}

/**
 * CENTER renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center>
 * @deprecated
 */
export function CENTER(
  props?: CenterElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "center",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
