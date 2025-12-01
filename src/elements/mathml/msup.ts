/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MsupElementProps are the props for the [`msup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msup) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msup>
 */
export interface MsupElementProps extends GlobalAttributes {
  /**
   * `superscriptshift` is an attribute of the [`msup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msup) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msup#superscriptshift>
   * @deprecated
   */
  superscriptshift?: string | undefined;
}

/**
 * MSUP renders the [`msup`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msup) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msup>
 */
export function MSUP(props?: MsupElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "msup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
