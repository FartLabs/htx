/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DirElementProps are the props for the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir>
 * @deprecated
 */
export interface DirElementProps extends GlobalAttributes {
  /**
   * `compact` is an attribute of the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir#compact>
   * @deprecated
   */
  compact?: string | undefined;
}

/**
 * DIR renders the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir>
 * @deprecated
 */
export function DIR(props?: DirElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "dir",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
