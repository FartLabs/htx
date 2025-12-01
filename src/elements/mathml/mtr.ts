/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MtrElementProps are the props for the [`mtr`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr>
 */
export interface MtrElementProps extends GlobalAttributes {
  /**
   * `columnalign` is an attribute of the [`mtr`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr#columnalign>
   */
  columnalign?: string | undefined;
  /**
   * `rowalign` is an attribute of the [`mtr`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr#rowalign>
   */
  rowalign?: string | undefined;
}

/**
 * MTR renders the [`mtr`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mtr>
 */
export function MTR(props?: MtrElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mtr",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
