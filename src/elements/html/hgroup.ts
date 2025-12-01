/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * HgroupElementProps are the props for the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup>
 */
export interface HgroupElementProps extends GlobalAttributes {
}

/**
 * HGROUP renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup>
 */
export function HGROUP(
  props?: HgroupElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "hgroup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
