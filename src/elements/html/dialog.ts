/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DialogElementProps are the props for the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog>
 */
export interface DialogElementProps extends GlobalAttributes {
  /**
   * `closedby` is an attribute of the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog#closedby>
   */
  closedby?: string | undefined;
  /**
   * `open` is an attribute of the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog#open>
   */
  open?: string | boolean | undefined;
}

/**
 * DIALOG renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog>
 */
export function DIALOG(
  props?: DialogElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "dialog",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
