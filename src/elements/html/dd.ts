/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DdElementProps are the props for the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd>
 */
export interface DdElementProps extends GlobalAttributes {
}

/**
 * DD renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd>
 */
export function DD(props?: DdElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "dd",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
