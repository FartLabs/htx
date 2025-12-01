/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * RtElementProps are the props for the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt>
 */
export interface RtElementProps extends GlobalAttributes {
}

/**
 * RT renders the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt>
 */
export function RT(props?: RtElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "rt",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
