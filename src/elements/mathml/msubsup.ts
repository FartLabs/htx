/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MsubsupElementProps are the props for the [`msubsup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup>
 */
export interface MsubsupElementProps extends GlobalAttributes {
  /**
   * `subscriptshift` is an attribute of the [`msubsup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup#subscriptshift>
   * @deprecated
   */
  subscriptshift?: string | undefined;
  /**
   * `superscriptshift` is an attribute of the [`msubsup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup#superscriptshift>
   * @deprecated
   */
  superscriptshift?: string | undefined;
}

/**
 * MSUBSUP renders the [`msubsup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msubsup>
 */
export function MSUBSUP(
  props?: MsubsupElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "msubsup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
