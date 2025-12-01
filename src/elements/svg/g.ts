/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * GElementProps are the props for the [`g`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g>
 */
export interface GElementProps extends GlobalAttributes {
  /**
   * `systemLanguage` is an attribute of the [`g`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * G renders the [`g`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/g>
 */
export function G(props?: GElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "g",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
