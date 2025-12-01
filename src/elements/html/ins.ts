/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * InsElementProps are the props for the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins>
 */
export interface InsElementProps extends GlobalAttributes {
  /**
   * `cite` is an attribute of the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins#cite>
   */
  cite?: string | undefined;
  /**
   * `datetime` is an attribute of the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins#datetime>
   */
  datetime?: string | undefined;
}

/**
 * INS renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins>
 */
export function INS(props?: InsElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ins",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
