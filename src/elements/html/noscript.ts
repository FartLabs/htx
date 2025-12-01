/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * NoscriptElementProps are the props for the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript>
 */
export interface NoscriptElementProps extends GlobalAttributes {
}

/**
 * NOSCRIPT renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript>
 */
export function NOSCRIPT(
  props?: NoscriptElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "noscript",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
