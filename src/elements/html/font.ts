/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FontElementProps are the props for the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font>
 * @deprecated
 */
export interface FontElementProps extends GlobalAttributes {
  /**
   * `color` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font#color>
   * @deprecated
   */
  color?: string | undefined;
  /**
   * `face` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font#face>
   * @deprecated
   */
  face?: string | undefined;
  /**
   * `size` is an attribute of the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font#size>
   * @deprecated
   */
  size?: string | undefined;
}

/**
 * FONT renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/font>
 * @deprecated
 */
export function FONT(props?: FontElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "font",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
