/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * OutputElementProps are the props for the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output>
 */
export interface OutputElementProps extends GlobalAttributes {
  /**
   * `for` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output#for>
   */
  for?: string | undefined;
  /**
   * `form` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output#form>
   */
  form?: string | undefined;
  /**
   * `name` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output#name>
   */
  name?: string | undefined;
}

/**
 * OUTPUT renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output>
 */
export function OUTPUT(
  props?: OutputElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "output",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
