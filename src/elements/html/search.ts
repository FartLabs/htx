/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SearchElementProps are the props for the [`search`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search>
 */
export interface SearchElementProps extends GlobalAttributes {
}

/**
 * SEARCH renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search>
 */
export function SEARCH(
  props?: SearchElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "search",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
