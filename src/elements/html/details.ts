/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DetailsElementProps are the props for the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details>
 */
export interface DetailsElementProps extends GlobalAttributes {
  /**
   * `name` is an attribute of the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details#name>
   */
  name?: string | undefined;
  /**
   * `open` is an attribute of the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details#open>
   */
  open?: string | boolean | undefined;
}

/**
 * DETAILS renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details>
 */
export function DETAILS(
  props?: DetailsElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "details",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
