/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TemplateElementProps are the props for the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template>
 */
export interface TemplateElementProps extends GlobalAttributes {
  /**
   * `shadowrootclonable` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootclonable>
   */
  shadowrootclonable?: string | undefined;
  /**
   * `shadowrootdelegatesfocus` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootdelegatesfocus>
   */
  shadowrootdelegatesfocus?: string | undefined;
  /**
   * `shadowrootmode` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootmode>
   */
  shadowrootmode?: string | undefined;
  /**
   * `shadowrootserializable` is an attribute of the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template#shadowrootserializable>
   */
  shadowrootserializable?: string | undefined;
}

/**
 * TEMPLATE renders the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template>
 */
export function TEMPLATE(
  props?: TemplateElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "template",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
