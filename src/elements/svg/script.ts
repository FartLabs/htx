/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ScriptElementProps are the props for the [`script`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script>
 */
export interface ScriptElementProps extends GlobalAttributes {
  /**
   * `async` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script#async>
   */
  async?: string | boolean | undefined;
  /**
   * `defer` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script#defer>
   */
  defer?: string | boolean | undefined;
  /**
   * `fetchpriority` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script#fetchpriority>
   */
  fetchpriority?: string | undefined;
  /**
   * `href` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script#href>
   */
  href?: string | undefined;
  /**
   * `type` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script#type>
   */
  type?: string | undefined;
}

/**
 * SCRIPT renders the [`script`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/script>
 */
export function SCRIPT(
  props?: ScriptElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "script",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
