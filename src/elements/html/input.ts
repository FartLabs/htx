/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * InputElementType is the type of the input element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#type>
 */
export type InputElementType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

/**
 * InputElementProps are the base props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input>
 */
export interface InputElementProps extends GlobalAttributes {
  /**
   * `accept` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#accept>
   */
  accept?: string | undefined;
  /**
   * `align` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `alpha` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#alpha>
   * @experimental
   */
  alpha?: string | undefined;
  /**
   * `alt` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#alt>
   */
  alt?: string | undefined;
  /**
   * `autocomplete` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#autocomplete>
   */
  autocomplete?: string | undefined;
  /**
   * `capture` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#capture>
   */
  capture?: string | undefined;
  /**
   * `checked` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#checked>
   */
  checked?: string | boolean | undefined;
  /**
   * `colorspace` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#colorspace>
   * @experimental
   */
  colorspace?: string | undefined;
  /**
   * `dirname` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#dirname>
   */
  dirname?: string | undefined;
  /**
   * `disabled` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#disabled>
   */
  disabled?: string | boolean | undefined;
  /**
   * `form` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#form>
   */
  form?: string | undefined;
  /**
   * `formaction` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#formaction>
   */
  formaction?: string | undefined;
  /**
   * `formenctype` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#formenctype>
   */
  formenctype?: string | undefined;
  /**
   * `formmethod` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#formmethod>
   */
  formmethod?: string | undefined;
  /**
   * `formnovalidate` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#formnovalidate>
   */
  formnovalidate?: string | boolean | undefined;
  /**
   * `formtarget` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#formtarget>
   */
  formtarget?: string | undefined;
  /**
   * `list` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#list>
   */
  list?: string | undefined;
  /**
   * `max` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#max>
   */
  max?: string | undefined;
  /**
   * `maxlength` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#maxlength>
   */
  maxlength?: string | undefined;
  /**
   * `min` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#min>
   */
  min?: string | undefined;
  /**
   * `minlength` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#minlength>
   */
  minlength?: string | undefined;
  /**
   * `multiple` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#multiple>
   */
  multiple?: string | boolean | undefined;
  /**
   * `name` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#name>
   */
  name?: string | undefined;
  /**
   * `pattern` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#pattern>
   */
  pattern?: string | undefined;
  /**
   * `placeholder` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#placeholder>
   */
  placeholder?: string | undefined;
  /**
   * `popovertarget` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#popovertarget>
   */
  popovertarget?: string | undefined;
  /**
   * `popovertargetaction` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#popovertargetaction>
   */
  popovertargetaction?: string | undefined;
  /**
   * `readonly` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#readonly>
   */
  readonly?: string | boolean | undefined;
  /**
   * `required` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#required>
   */
  required?: string | boolean | undefined;
  /**
   * `size` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#size>
   */
  size?: string | undefined;
  /**
   * `src` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#src>
   */
  src?: string | undefined;
  /**
   * `step` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#step>
   */
  step?: string | undefined;
  /**
   * `usemap` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#usemap>
   * @deprecated
   */
  usemap?: string | undefined;
  /**
   * `webkitdirectory` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input#webkitdirectory>
   */
  webkitdirectory?: string | undefined;
  /**
   * `type` is the type of the input element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#type>
   */
  type?: InputElementType | undefined;
  /**
   * `value` is the value of the input element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#value>
   */
  value?: string | undefined;
}

/**
 * INPUT renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input>
 */
export function INPUT(props?: InputElementProps): string {
  return renderElement("input", props as unknown as AnyProps, true);
}
