/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SetElementProps are the props for the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set>
 */
export interface SetElementProps extends GlobalAttributes {
  /**
   * `fill` is an attribute of the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set#fill>
   */
  fill?: string | undefined;
  /**
   * `href` is an attribute of the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set#href>
   */
  href?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `to` is an attribute of the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set#to>
   */
  to?: string | undefined;
}

/**
 * SET renders the [`set`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/set>
 */
export function SET(props?: SetElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "set",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
