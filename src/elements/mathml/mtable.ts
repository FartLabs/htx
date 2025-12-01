/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MtableElementProps are the props for the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable>
 */
export interface MtableElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#align>
   */
  align?: string | undefined;
  /**
   * `columnalign` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#columnalign>
   */
  columnalign?: string | undefined;
  /**
   * `columnlines` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#columnlines>
   */
  columnlines?: string | undefined;
  /**
   * `columnspacing` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#columnspacing>
   */
  columnspacing?: string | undefined;
  /**
   * `frame` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#frame>
   */
  frame?: string | undefined;
  /**
   * `framespacing` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#framespacing>
   */
  framespacing?: string | undefined;
  /**
   * `rowalign` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#rowalign>
   */
  rowalign?: string | undefined;
  /**
   * `rowlines` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#rowlines>
   */
  rowlines?: string | undefined;
  /**
   * `rowspacing` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#rowspacing>
   */
  rowspacing?: string | undefined;
  /**
   * `width` is an attribute of the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable#width>
   */
  width?: string | undefined;
}

/**
 * MTABLE renders the [`mtable`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtable>
 */
export function MTABLE(
  props?: MtableElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mtable",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
