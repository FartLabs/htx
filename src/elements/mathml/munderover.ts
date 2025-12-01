/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MunderoverElementProps are the props for the [`munderover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover>
 */
export interface MunderoverElementProps extends GlobalAttributes {
  /**
   * `accent` is an attribute of the [`munderover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover#accent>
   */
  accent?: string | undefined;
  /**
   * `accentunder` is an attribute of the [`munderover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover#accentunder>
   */
  accentunder?: string | undefined;
}

/**
 * MUNDEROVER renders the [`munderover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/munderover>
 */
export function MUNDEROVER(
  props?: MunderoverElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "munderover",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
