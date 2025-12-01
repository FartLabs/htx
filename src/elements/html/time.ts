/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TimeElementProps are the props for the [`time`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time>
 */
export interface TimeElementProps extends GlobalAttributes {
  /**
   * `datetime` is an attribute of the [`time`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time#datetime>
   */
  datetime?: string | undefined;
}

/**
 * TIME renders the [`time`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time>
 */
export function TIME(props?: TimeElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "time",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
