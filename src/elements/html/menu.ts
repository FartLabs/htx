/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MenuElementProps are the props for the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu>
 */
export interface MenuElementProps extends GlobalAttributes {
}

/**
 * MENU renders the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu>
 */
export function MENU(props?: MenuElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "menu",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
