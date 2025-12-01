/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BElementProps are the props for the [`b`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b>
 */
export interface BElementProps extends GlobalAttributes {
}

/**
 * B renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b>
 */
export function B(props?: BElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "b",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
