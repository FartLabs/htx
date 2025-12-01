/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SelectElementProps are the props for the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select>
 */
export interface SelectElementProps extends GlobalAttributes {
  /**
   * `autocomplete` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#autocomplete>
   */
  autocomplete?: string | undefined;
  /**
   * `disabled` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#disabled>
   */
  disabled?: string | boolean | undefined;
  /**
   * `form` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#form>
   */
  form?: string | undefined;
  /**
   * `multiple` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#multiple>
   */
  multiple?: string | boolean | undefined;
  /**
   * `name` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#name>
   */
  name?: string | undefined;
  /**
   * `required` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#required>
   */
  required?: string | boolean | undefined;
  /**
   * `size` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#size>
   */
  size?: string | undefined;
}

/**
 * SELECT renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select>
 */
export function SELECT(
  props?: SelectElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "select",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
