/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * EmElementProps are the props for the [`em`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em>
 */
export interface EmElementProps extends GlobalAttributes {
}

/**
 * EM renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em>
 */
export function EM(props?: EmElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "em",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
