/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * UlElementProps are the props for the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul>
 */
export interface UlElementProps extends GlobalAttributes {
  /**
   * `compact` is an attribute of the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul#compact>
   * @deprecated
   */
  compact?: string | undefined;
  /**
   * `type` is an attribute of the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul#type>
   * @deprecated
   */
  type?: string | undefined;
}

/**
 * UL renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul>
 */
export function UL(props?: UlElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ul",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
