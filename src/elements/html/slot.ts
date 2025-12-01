/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SlotElementProps are the props for the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot>
 */
export interface SlotElementProps extends GlobalAttributes {
  /**
   * `name` is an attribute of the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot#name>
   */
  name?: string | undefined;
}

/**
 * SLOT renders the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot>
 */
export function SLOT(props?: SlotElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "slot",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
