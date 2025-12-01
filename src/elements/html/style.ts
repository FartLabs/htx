/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * StyleElementProps are the props for the [`style`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style>
 */
export interface StyleElementProps extends GlobalAttributes {
  /**
   * `blocking` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style#blocking>
   */
  blocking?: string | undefined;
  /**
   * `media` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style#media>
   */
  media?: string | undefined;
  /**
   * `type` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style#type>
   * @deprecated
   */
  type?: string | undefined;
}

/**
 * STYLE renders the [`style`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style>
 */
export function STYLE(
  props?: StyleElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "style",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
