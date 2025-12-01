/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * VarElementProps are the props for the [`var`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var>
 */
export interface VarElementProps extends GlobalAttributes {
}

/**
 * VAR renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var>
 */
export function VAR(props?: VarElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "var",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
