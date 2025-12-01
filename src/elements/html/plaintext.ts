/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * PlaintextElementProps are the props for the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext>
 * @deprecated
 */
export interface PlaintextElementProps extends GlobalAttributes {
}

/**
 * PLAINTEXT renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext>
 * @deprecated
 */
export function PLAINTEXT(
  props?: PlaintextElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "plaintext",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
