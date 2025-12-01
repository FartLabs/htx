/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeDisplacementMapElementProps are the props for the [`feDisplacementMap`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap>
 */
export interface FeDisplacementMapElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feDisplacementMap`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap#in>
   */
  in?: string | undefined;
  /**
   * `in2` is an attribute of the [`feDisplacementMap`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap#in2>
   */
  in2?: string | undefined;
  /**
   * `scale` is an attribute of the [`feDisplacementMap`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap#scale>
   */
  scale?: string | undefined;
  /**
   * `xChannelSelector` is an attribute of the [`feDisplacementMap`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap#xChannelSelector>
   */
  xChannelSelector?: string | undefined;
  /**
   * `yChannelSelector` is an attribute of the [`feDisplacementMap`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap#yChannelSelector>
   */
  yChannelSelector?: string | undefined;
}

/**
 * FE_DISPLACEMENT_MAP renders the [`feDisplacementMap`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feDisplacementMap>
 */
export function FE_DISPLACEMENT_MAP(
  props?: FeDisplacementMapElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feDisplacementMap",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
