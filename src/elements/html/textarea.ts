/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TextareaElementProps are the props for the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea>
 */
export interface TextareaElementProps extends GlobalAttributes {
  /**
   * `autocomplete` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#autocomplete>
   */
  autocomplete?: string | undefined;
  /**
   * `cols` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#cols>
   */
  cols?: string | undefined;
  /**
   * `dirname` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#dirname>
   */
  dirname?: string | undefined;
  /**
   * `disabled` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#disabled>
   */
  disabled?: string | boolean | undefined;
  /**
   * `form` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#form>
   */
  form?: string | undefined;
  /**
   * `maxlength` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#maxlength>
   */
  maxlength?: string | undefined;
  /**
   * `minlength` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#minlength>
   */
  minlength?: string | undefined;
  /**
   * `name` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#name>
   */
  name?: string | undefined;
  /**
   * `placeholder` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#placeholder>
   */
  placeholder?: string | undefined;
  /**
   * `readonly` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#readonly>
   */
  readonly?: string | boolean | undefined;
  /**
   * `required` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#required>
   */
  required?: string | boolean | undefined;
  /**
   * `rows` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#rows>
   */
  rows?: string | undefined;
  /**
   * `wrap` is an attribute of the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea#wrap>
   */
  wrap?: string | undefined;
}

/**
 * TEXTAREA renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea>
 */
export function TEXTAREA(
  props?: TextareaElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "textarea",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
