/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * HeadElementProps are the props for the [`head`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head>
 */
export interface HeadElementProps extends GlobalAttributes {
}

/**
 * HEAD renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head>
 */
export function HEAD(props?: HeadElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "head",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
