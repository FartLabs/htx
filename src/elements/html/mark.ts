/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MarkElementProps are the props for the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark>
 */
export interface MarkElementProps extends GlobalAttributes {
}

/**
 * MARK renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark>
 */
export function MARK(props?: MarkElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mark",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
