/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DfnElementProps are the props for the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn>
 */
export interface DfnElementProps extends GlobalAttributes {
}

/**
 * DFN renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn>
 */
export function DFN(props?: DfnElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "dfn",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
