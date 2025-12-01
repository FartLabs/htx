/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * CiteElementProps are the props for the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite>
 */
export interface CiteElementProps extends GlobalAttributes {
}

/**
 * CITE renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite>
 */
export function CITE(props?: CiteElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "cite",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
