/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * CaptionElementProps are the props for the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption>
 */
export interface CaptionElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption#align>
   * @deprecated
   */
  align?: string | undefined;
}

/**
 * CAPTION renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption>
 */
export function CAPTION(
  props?: CaptionElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "caption",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
