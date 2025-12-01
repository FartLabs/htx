/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DivElementProps are the props for the [`div`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div>
 */
export interface DivElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`div`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div#align>
   * @deprecated
   */
  align?: string | undefined;
}

/**
 * DIV renders the [`div`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div>
 */
export function DIV(props?: DivElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "div",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
