/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MactionElementProps are the props for the [`maction`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction>
 * @deprecated
 */
export interface MactionElementProps extends GlobalAttributes {
  /**
   * `actiontype` is an attribute of the [`maction`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction#actiontype>
   * @deprecated
   */
  actiontype?: string | undefined;
  /**
   * `selection` is an attribute of the [`maction`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction#selection>
   * @deprecated
   */
  selection?: string | undefined;
}

/**
 * MACTION renders the [`maction`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/maction>
 * @deprecated
 */
export function MACTION(
  props?: MactionElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "maction",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
