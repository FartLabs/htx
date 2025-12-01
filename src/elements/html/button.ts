/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ButtonElementProps are the props for the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button>
 */
export interface ButtonElementProps extends GlobalAttributes {
  /**
   * `command` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#command>
   */
  command?: string | undefined;
  /**
   * `commandfor` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#commandfor>
   */
  commandfor?: string | undefined;
  /**
   * `disabled` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#disabled>
   */
  disabled?: string | boolean | undefined;
  /**
   * `form` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#form>
   */
  form?: string | undefined;
  /**
   * `formaction` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#formaction>
   */
  formaction?: string | undefined;
  /**
   * `formenctype` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#formenctype>
   */
  formenctype?: string | undefined;
  /**
   * `formmethod` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#formmethod>
   */
  formmethod?: string | undefined;
  /**
   * `formnovalidate` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#formnovalidate>
   */
  formnovalidate?: string | boolean | undefined;
  /**
   * `formtarget` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#formtarget>
   */
  formtarget?: string | undefined;
  /**
   * `interestfor` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#interestfor>
   * @experimental
   */
  interestfor?: string | undefined;
  /**
   * `name` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#name>
   */
  name?: string | undefined;
  /**
   * `popovertarget` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#popovertarget>
   */
  popovertarget?: string | undefined;
  /**
   * `popovertargetaction` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#popovertargetaction>
   */
  popovertargetaction?: string | undefined;
  /**
   * `type` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#type>
   */
  type?: string | undefined;
  /**
   * `value` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button#value>
   */
  value?: string | undefined;
}

/**
 * BUTTON renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button>
 */
export function BUTTON(
  props?: ButtonElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "button",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
