/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ImageElementProps are the props for the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image>
 */
export interface ImageElementProps extends GlobalAttributes {
  /**
   * `crossorigin` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `decoding` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#decoding>
   */
  decoding?: string | undefined;
  /**
   * `fetchpriority` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#fetchpriority>
   * @experimental
   */
  fetchpriority?: string | undefined;
  /**
   * `height` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#height>
   */
  height?: string | undefined;
  /**
   * `href` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#href>
   */
  href?: string | undefined;
  /**
   * `preserveAspectRatio` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#preserveAspectRatio>
   */
  preserveAspectRatio?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `width` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#width>
   */
  width?: string | undefined;
  /**
   * `x` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image#y>
   */
  y?: string | undefined;
}

/**
 * IMAGE renders the [`image`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/image>
 */
export function IMAGE(
  props?: ImageElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "image",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
