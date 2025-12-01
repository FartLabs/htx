/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MpaddedElementProps are the props for the [`mpadded`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded>
 */
export interface MpaddedElementProps extends GlobalAttributes {
  /**
   * `depth` is an attribute of the [`mpadded`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded#depth>
   */
  depth?: string | undefined;
  /**
   * `height` is an attribute of the [`mpadded`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded#height>
   */
  height?: string | undefined;
  /**
   * `lspace` is an attribute of the [`mpadded`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded#lspace>
   */
  lspace?: string | undefined;
  /**
   * `voffset` is an attribute of the [`mpadded`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded#voffset>
   */
  voffset?: string | undefined;
  /**
   * `width` is an attribute of the [`mpadded`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded#width>
   */
  width?: string | undefined;
}

/**
 * MPADDED renders the [`mpadded`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mpadded>
 */
export function MPADDED(
  props?: MpaddedElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mpadded",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
