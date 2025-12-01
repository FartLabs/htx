/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * KbdElementProps are the props for the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd>
 */
export interface KbdElementProps extends GlobalAttributes {
}

/**
 * KBD renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd>
 */
export function KBD(props?: KbdElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "kbd",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
