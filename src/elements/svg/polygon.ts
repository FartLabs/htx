/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * PolygonElementProps are the props for the [`polygon`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon>
 */
export interface PolygonElementProps extends GlobalAttributes {
  /**
   * `fill` is an attribute of the [`polygon`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon#fill>
   */
  fill?: string | undefined;
  /**
   * `points` is an attribute of the [`polygon`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon#points>
   */
  points?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`polygon`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * POLYGON renders the [`polygon`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/polygon>
 */
export function POLYGON(
  props?: PolygonElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "polygon",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
