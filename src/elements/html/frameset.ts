/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FramesetElementProps are the props for the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset>
 * @deprecated
 */
export interface FramesetElementProps extends GlobalAttributes {
  /**
   * `cols` is an attribute of the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset#cols>
   * @deprecated
   */
  cols?: string | undefined;
  /**
   * `rows` is an attribute of the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset#rows>
   * @deprecated
   */
  rows?: string | undefined;
}

/**
 * FRAMESET renders the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset>
 * @deprecated
 */
export function FRAMESET(
  props?: FramesetElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "frameset",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
