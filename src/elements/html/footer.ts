/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FooterElementProps are the props for the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer>
 */
export interface FooterElementProps extends GlobalAttributes {
}

/**
 * FOOTER renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer>
 */
export function FOOTER(
  props?: FooterElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "footer",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
