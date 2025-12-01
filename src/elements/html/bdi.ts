/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BdiElementProps are the props for the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi>
 */
export interface BdiElementProps extends GlobalAttributes {
}

/**
 * BDI renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi>
 */
export function BDI(props?: BdiElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "bdi",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
