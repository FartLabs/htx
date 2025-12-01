/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MfracElementProps are the props for the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac>
 */
export interface MfracElementProps extends GlobalAttributes {
  /**
   * `denomalign` is an attribute of the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac#denomalign>
   * @deprecated
   */
  denomalign?: string | undefined;
  /**
   * `linethickness` is an attribute of the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac#linethickness>
   */
  linethickness?: string | undefined;
  /**
   * `numalign` is an attribute of the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac#numalign>
   * @deprecated
   */
  numalign?: string | undefined;
}

/**
 * MFRAC renders the [`mfrac`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mfrac>
 */
export function MFRAC(
  props?: MfracElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mfrac",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
