/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SampElementProps are the props for the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp>
 */
export interface SampElementProps extends GlobalAttributes {
}

/**
 * SAMP renders the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp>
 */
export function SAMP(props?: SampElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "samp",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
