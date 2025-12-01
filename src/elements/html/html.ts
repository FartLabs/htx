/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * HtmlElementProps are the props for the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html>
 */
export interface HtmlElementProps extends GlobalAttributes {
  /**
   * `version` is an attribute of the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html#version>
   * @deprecated
   */
  version?: string | undefined;
  /**
   * `xmlns` is an attribute of the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html#xmlns>
   */
  xmlns?: string | undefined;
}

/**
 * HTML renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html>
 */
export function HTML(props?: HtmlElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "html",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
