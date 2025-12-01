/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DlElementProps are the props for the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl>
 */
export interface DlElementProps extends GlobalAttributes {
}

/**
 * DL renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl>
 */
export function DL(props?: DlElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "dl",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
