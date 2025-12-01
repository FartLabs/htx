/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BrElementProps are the props for the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br>
 */
export interface BrElementProps extends GlobalAttributes {
  /**
   * `clear` is an attribute of the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br#clear>
   * @deprecated
   */
  clear?: string | undefined;
}

/**
 * BR renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br>
 */
export function BR(props?: BrElementProps): string {
  return renderElement("br", props as AnyProps, true);
}
