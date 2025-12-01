/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * RbElementProps are the props for the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export interface RbElementProps extends GlobalAttributes {
}

/**
 * RB renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export function RB(props?: RbElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "rb",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
