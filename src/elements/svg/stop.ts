/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * StopElementProps are the props for the [`stop`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop>
 */
export interface StopElementProps extends GlobalAttributes {
  /**
   * `offset` is an attribute of the [`stop`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop#offset>
   */
  offset?: string | undefined;
}

/**
 * STOP renders the [`stop`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/stop>
 */
export function STOP(props?: StopElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "stop",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
