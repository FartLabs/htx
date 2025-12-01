/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * NoframesElementProps are the props for the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes>
 * @deprecated
 */
export interface NoframesElementProps extends GlobalAttributes {
}

/**
 * NOFRAMES renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes>
 * @deprecated
 */
export function NOFRAMES(
  props?: NoframesElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "noframes",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
