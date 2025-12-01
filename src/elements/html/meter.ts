/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MeterElementProps are the props for the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter>
 */
export interface MeterElementProps extends GlobalAttributes {
  /**
   * `high` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter#high>
   */
  high?: string | undefined;
  /**
   * `low` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter#low>
   */
  low?: string | undefined;
  /**
   * `max` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter#max>
   */
  max?: string | undefined;
  /**
   * `min` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter#min>
   */
  min?: string | undefined;
  /**
   * `optimum` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter#optimum>
   */
  optimum?: string | undefined;
  /**
   * `value` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter#value>
   */
  value?: string | undefined;
}

/**
 * METER renders the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter>
 */
export function METER(
  props?: MeterElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "meter",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
