/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MtdElementProps are the props for the [`mtd`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd>
 */
export interface MtdElementProps extends GlobalAttributes {
  /**
   * `columnalign` is an attribute of the [`mtd`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd#columnalign>
   */
  columnalign?: string | undefined;
  /**
   * `columnspan` is an attribute of the [`mtd`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd#columnspan>
   */
  columnspan?: string | undefined;
  /**
   * `rowalign` is an attribute of the [`mtd`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd#rowalign>
   */
  rowalign?: string | undefined;
  /**
   * `rowspan` is an attribute of the [`mtd`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd#rowspan>
   */
  rowspan?: string | undefined;
}

/**
 * MTD renders the [`mtd`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtd>
 */
export function MTD(props?: MtdElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mtd",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
