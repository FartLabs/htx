/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MpathElementProps are the props for the [`mpath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath>
 */
export interface MpathElementProps extends GlobalAttributes {
  /**
   * `href` is an attribute of the [`mpath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath#href>
   */
  href?: string | undefined;
}

/**
 * MPATH renders the [`mpath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/mpath>
 */
export function MPATH(
  props?: MpathElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mpath",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
