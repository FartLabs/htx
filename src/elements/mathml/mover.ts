/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MoverElementProps are the props for the [`mover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mover) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mover>
 */
export interface MoverElementProps extends GlobalAttributes {
  /**
   * `accent` is an attribute of the [`mover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mover) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mover#accent>
   */
  accent?: string | undefined;
}

/**
 * MOVER renders the [`mover`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mover) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mover>
 */
export function MOVER(
  props?: MoverElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mover",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
