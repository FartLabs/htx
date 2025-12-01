/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * OptgroupElementProps are the props for the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup>
 */
export interface OptgroupElementProps extends GlobalAttributes {
  /**
   * `disabled` is an attribute of the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup#disabled>
   */
  disabled?: string | boolean | undefined;
  /**
   * `label` is an attribute of the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup#label>
   */
  label?: string | undefined;
}

/**
 * OPTGROUP renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup>
 */
export function OPTGROUP(
  props?: OptgroupElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "optgroup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
