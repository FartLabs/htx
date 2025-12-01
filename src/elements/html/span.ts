/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SpanElementProps are the props for the [`span`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span>
 */
export interface SpanElementProps extends GlobalAttributes {
}

/**
 * SPAN renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span>
 */
export function SPAN(props?: SpanElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "span",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
