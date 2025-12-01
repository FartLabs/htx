/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * PictureElementProps are the props for the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture>
 */
export interface PictureElementProps extends GlobalAttributes {
}

/**
 * PICTURE renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture>
 */
export function PICTURE(
  props?: PictureElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "picture",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
