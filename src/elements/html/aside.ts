/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AsideElementProps are the props for the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside>
 */
export interface AsideElementProps extends GlobalAttributes {
}

/**
 * ASIDE renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside>
 */
export function ASIDE(
  props?: AsideElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "aside",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
