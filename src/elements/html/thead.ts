/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TheadElementProps are the props for the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead>
 */
export interface TheadElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * THEAD renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead>
 */
export function THEAD(
  props?: TheadElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "thead",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
