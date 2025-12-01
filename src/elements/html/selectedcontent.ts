/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SelectedcontentElementProps are the props for the [`selectedcontent`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent>
 * @experimental
 */
export interface SelectedcontentElementProps extends GlobalAttributes {
}

/**
 * SELECTEDCONTENT renders the [`selectedcontent`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent>
 * @experimental
 */
export function SELECTEDCONTENT(
  props?: SelectedcontentElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "selectedcontent",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
