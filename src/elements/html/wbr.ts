/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * WbrElementProps are the props for the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr>
 */
export interface WbrElementProps extends GlobalAttributes {
}

/**
 * WBR renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr>
 */
export function WBR(props?: WbrElementProps): string {
  return renderElement("wbr", props as AnyProps, true);
}
