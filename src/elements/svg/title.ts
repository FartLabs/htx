/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TitleElementProps are the props for the [`title`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/title) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/title>
 */
export interface TitleElementProps extends GlobalAttributes {
}

/**
 * TITLE renders the [`title`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/title) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/title>
 */
export function TITLE(
  props?: TitleElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "title",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
