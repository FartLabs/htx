/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ObjectElementProps are the props for the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object>
 */
export interface ObjectElementProps extends GlobalAttributes {
  /**
   * `archive` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#archive>
   * @deprecated
   */
  archive?: string | undefined;
  /**
   * `border` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#border>
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `classid` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#classid>
   * @deprecated
   */
  classid?: string | undefined;
  /**
   * `codebase` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#codebase>
   * @deprecated
   */
  codebase?: string | undefined;
  /**
   * `codetype` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#codetype>
   * @deprecated
   */
  codetype?: string | undefined;
  /**
   * `data` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#data>
   */
  data?: string | undefined;
  /**
   * `declare` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#declare>
   * @deprecated
   */
  declare?: string | undefined;
  /**
   * `form` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#form>
   */
  form?: string | undefined;
  /**
   * `height` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#height>
   */
  height?: string | undefined;
  /**
   * `name` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#name>
   */
  name?: string | undefined;
  /**
   * `standby` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#standby>
   * @deprecated
   */
  standby?: string | undefined;
  /**
   * `type` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#type>
   */
  type?: string | undefined;
  /**
   * `usemap` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#usemap>
   * @deprecated
   */
  usemap?: string | undefined;
  /**
   * `width` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object#width>
   */
  width?: string | undefined;
}

/**
 * OBJECT renders the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object>
 */
export function OBJECT(
  props?: ObjectElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "object",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
