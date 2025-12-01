/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BaseElementProps are the props for the [`base`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base>
 */
export interface BaseElementProps extends GlobalAttributes {
  /**
   * `href` is an attribute of the [`base`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base#href>
   */
  href?: string | undefined;
  /**
   * `target` is an attribute of the [`base`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base#target>
   */
  target?: string | undefined;
}

/**
 * BASE renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base>
 */
export function BASE(props?: BaseElementProps): string {
  return renderElement("base", props as AnyProps, true);
}
