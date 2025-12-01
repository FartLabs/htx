/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MsubElementProps are the props for the [`msub`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msub) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msub>
 */
export interface MsubElementProps extends GlobalAttributes {
  /**
   * `subscriptshift` is an attribute of the [`msub`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msub) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msub#subscriptshift>
   * @deprecated
   */
  subscriptshift?: string | undefined;
}

/**
 * MSUB renders the [`msub`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msub) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/msub>
 */
export function MSUB(props?: MsubElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "msub",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
