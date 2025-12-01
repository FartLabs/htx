/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * HeaderElementProps are the props for the [`header`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header>
 */
export interface HeaderElementProps extends GlobalAttributes {
}

/**
 * HEADER renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header>
 */
export function HEADER(
  props?: HeaderElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "header",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
