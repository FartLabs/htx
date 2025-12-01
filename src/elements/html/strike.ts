/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * StrikeElementProps are the props for the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike>
 * @deprecated
 */
export interface StrikeElementProps extends GlobalAttributes {
}

/**
 * STRIKE renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strike>
 * @deprecated
 */
export function STRIKE(
  props?: StrikeElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "strike",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
