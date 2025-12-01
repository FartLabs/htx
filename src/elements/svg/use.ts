/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * UseElementProps are the props for the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use>
 */
export interface UseElementProps extends GlobalAttributes {
  /**
   * `height` is an attribute of the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use#height>
   */
  height?: string | undefined;
  /**
   * `href` is an attribute of the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use#href>
   */
  href?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `width` is an attribute of the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use#width>
   */
  width?: string | undefined;
  /**
   * `x` is an attribute of the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use#y>
   */
  y?: string | undefined;
}

/**
 * USE renders the [`use`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/use>
 */
export function USE(props?: UseElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "use",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
