/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FormElementProps are the props for the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form>
 */
export interface FormElementProps extends GlobalAttributes {
  /**
   * `accept-charset` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#accept-charset>
   */
  "accept-charset"?: string | undefined;
  /**
   * `action` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#action>
   */
  action?: string | undefined;
  /**
   * `autocomplete` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#autocomplete>
   */
  autocomplete?: string | undefined;
  /**
   * `enctype` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#enctype>
   */
  enctype?: string | undefined;
  /**
   * `method` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#method>
   */
  method?: string | undefined;
  /**
   * `name` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#name>
   */
  name?: string | undefined;
  /**
   * `novalidate` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#novalidate>
   */
  novalidate?: string | boolean | undefined;
  /**
   * `rel` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#rel>
   */
  rel?: string | undefined;
  /**
   * `target` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form#target>
   */
  target?: string | undefined;
}

/**
 * FORM renders the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form>
 */
export function FORM(props?: FormElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "form",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
