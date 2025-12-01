/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ScriptElementProps are the props for the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script>
 */
export interface ScriptElementProps extends GlobalAttributes {
  /**
   * `async` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#async>
   */
  async?: string | boolean | undefined;
  /**
   * `attributionsrc` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#attributionsrc>
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `blocking` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#blocking>
   */
  blocking?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `defer` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#defer>
   */
  defer?: string | boolean | undefined;
  /**
   * `fetchpriority` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#fetchpriority>
   */
  fetchpriority?: string | undefined;
  /**
   * `integrity` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#integrity>
   */
  integrity?: string | undefined;
  /**
   * `nomodule` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#nomodule>
   */
  nomodule?: string | boolean | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `src` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#src>
   */
  src?: string | undefined;
  /**
   * `type` is an attribute of the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#type>
   */
  type?: string | undefined;
}

/**
 * SCRIPT renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script>
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
