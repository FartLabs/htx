/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MiElementProps are the props for the [`mi`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi>
 */
export interface MiElementProps extends GlobalAttributes {
  /**
   * `mathvariant` is an attribute of the [`mi`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi#mathvariant>
   */
  mathvariant?: string | undefined;
}

/**
 * MI renders the [`mi`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mi>
 */
export function MI(props?: MiElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mi",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
