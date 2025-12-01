/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SwitchElementProps are the props for the [`switch`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch>
 */
export interface SwitchElementProps extends GlobalAttributes {
  /**
   * `systemLanguage` is an attribute of the [`switch`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * SWITCH renders the [`switch`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch>
 */
export function SWITCH(
  props?: SwitchElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "switch",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
