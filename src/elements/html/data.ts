/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DataElementProps are the props for the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data>
 */
export interface DataElementProps extends GlobalAttributes {
  /**
   * `value` is an attribute of the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data#value>
   */
  value?: string | undefined;
}

/**
 * DATA renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data>
 */
export function DATA(props?: DataElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "data",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
