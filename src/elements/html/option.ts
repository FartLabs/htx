/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * OptionElementProps are the props for the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option>
 */
export interface OptionElementProps extends GlobalAttributes {
  /**
   * `disabled` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option#disabled>
   */
  disabled?: string | boolean | undefined;
  /**
   * `label` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option#label>
   */
  label?: string | undefined;
  /**
   * `selected` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option#selected>
   */
  selected?: string | boolean | undefined;
  /**
   * `value` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option#value>
   */
  value?: string | undefined;
}

/**
 * OPTION renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option>
 */
export function OPTION(
  props?: OptionElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "option",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
