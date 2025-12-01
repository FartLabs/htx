/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * PathElementProps are the props for the [`path`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path>
 */
export interface PathElementProps extends GlobalAttributes {
  /**
   * `d` is an attribute of the [`path`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path#d>
   */
  d?: string | undefined;
  /**
   * `fill` is an attribute of the [`path`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path#fill>
   */
  fill?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`path`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * PATH renders the [`path`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path>
 */
export function PATH(props?: PathElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "path",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
