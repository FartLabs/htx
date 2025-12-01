/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MrowElementProps are the props for the [`mrow`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mrow) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mrow>
 */
export interface MrowElementProps extends GlobalAttributes {
}

/**
 * MROW renders the [`mrow`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mrow) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mrow>
 */
export function MROW(props?: MrowElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mrow",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
