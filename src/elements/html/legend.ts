/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * LegendElementProps are the props for the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend>
 */
export interface LegendElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend#align>
   * @deprecated
   */
  align?: string | undefined;
}

/**
 * LEGEND renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend>
 */
export function LEGEND(
  props?: LegendElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "legend",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
