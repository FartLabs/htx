/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SummaryElementProps are the props for the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary>
 */
export interface SummaryElementProps extends GlobalAttributes {
}

/**
 * SUMMARY renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary>
 */
export function SUMMARY(
  props?: SummaryElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "summary",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
