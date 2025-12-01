/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * PreElementProps are the props for the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre>
 */
export interface PreElementProps extends GlobalAttributes {
  /**
   * `width` is an attribute of the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * PRE renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre>
 */
export function PRE(props?: PreElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "pre",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
