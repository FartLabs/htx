/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AddressElementProps are the props for the [`address`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address>
 */
export interface AddressElementProps extends GlobalAttributes {
}

/**
 * ADDRESS renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address>
 */
export function ADDRESS(
  props?: AddressElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "address",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
