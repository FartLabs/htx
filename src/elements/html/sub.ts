/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SubElementProps are the props for the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub>
 */
export interface SubElementProps extends GlobalAttributes {
}

/**
 * SUB renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub>
 */
export function SUB(props?: SubElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "sub",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
