/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FencedframeElementProps are the props for the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @experimental
 */
export interface FencedframeElementProps extends GlobalAttributes {
  /**
   * `allow` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#allow>
   * @experimental
   */
  allow?: string | undefined;
  /**
   * `height` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#height>
   * @experimental
   */
  height?: string | undefined;
  /**
   * `width` is an attribute of the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe#width>
   * @experimental
   */
  width?: string | undefined;
}

/**
 * FENCEDFRAME renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @experimental
 */
export function FENCEDFRAME(
  props?: FencedframeElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "fencedframe",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
