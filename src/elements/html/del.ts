/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DelElementProps are the props for the [`del`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del>
 */
export interface DelElementProps extends GlobalAttributes {
  /**
   * `cite` is an attribute of the [`del`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del#cite>
   */
  cite?: string | undefined;
  /**
   * `datetime` is an attribute of the [`del`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del#datetime>
   */
  datetime?: string | undefined;
}

/**
 * DEL renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del>
 */
export function DEL(props?: DelElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "del",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
