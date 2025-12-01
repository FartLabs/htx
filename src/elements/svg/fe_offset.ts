/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeOffsetElementProps are the props for the [`feOffset`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset>
 */
export interface FeOffsetElementProps extends GlobalAttributes {
  /**
   * `dx` is an attribute of the [`feOffset`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset#dx>
   */
  dx?: string | undefined;
  /**
   * `dy` is an attribute of the [`feOffset`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset#dy>
   */
  dy?: string | undefined;
  /**
   * `in` is an attribute of the [`feOffset`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset#in>
   */
  in?: string | undefined;
}

/**
 * FE_OFFSET renders the [`feOffset`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset>
 */
export function FE_OFFSET(
  props?: FeOffsetElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feOffset",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
