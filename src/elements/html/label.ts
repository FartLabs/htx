/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * LabelElementProps are the props for the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label>
 */
export interface LabelElementProps extends GlobalAttributes {
  /**
   * `for` is an attribute of the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label#for>
   */
  for?: string | undefined;
}

/**
 * LABEL renders the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label>
 */
export function LABEL(
  props?: LabelElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "label",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
