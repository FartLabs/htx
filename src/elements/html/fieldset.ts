/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FieldsetElementProps are the props for the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset>
 */
export interface FieldsetElementProps extends GlobalAttributes {
  /**
   * `disabled` is an attribute of the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset#disabled>
   */
  disabled?: string | boolean | undefined;
  /**
   * `form` is an attribute of the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset#form>
   */
  form?: string | undefined;
  /**
   * `name` is an attribute of the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset#name>
   */
  name?: string | undefined;
}

/**
 * FIELDSET renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset>
 */
export function FIELDSET(
  props?: FieldsetElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "fieldset",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
