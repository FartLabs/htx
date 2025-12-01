/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * RpElementProps are the props for the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp>
 */
export interface RpElementProps extends GlobalAttributes {
}

/**
 * RP renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp>
 */
export function RP(props?: RpElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "rp",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
