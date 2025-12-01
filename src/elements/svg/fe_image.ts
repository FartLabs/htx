/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeImageElementProps are the props for the [`feImage`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage>
 */
export interface FeImageElementProps extends GlobalAttributes {
  /**
   * `crossorigin` is an attribute of the [`feImage`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `fetchpriority` is an attribute of the [`feImage`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage#fetchpriority>
   * @experimental
   */
  fetchpriority?: string | undefined;
  /**
   * `href` is an attribute of the [`feImage`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage#href>
   */
  href?: string | undefined;
  /**
   * `preserveAspectRatio` is an attribute of the [`feImage`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage#preserveAspectRatio>
   */
  preserveAspectRatio?: string | undefined;
}

/**
 * FE_IMAGE renders the [`feImage`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feImage>
 */
export function FE_IMAGE(
  props?: FeImageElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feImage",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
