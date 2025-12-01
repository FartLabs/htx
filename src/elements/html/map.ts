/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MapElementProps are the props for the [`map`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map>
 */
export interface MapElementProps extends GlobalAttributes {
  /**
   * `name` is an attribute of the [`map`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map#name>
   */
  name?: string | undefined;
}

/**
 * MAP renders the [`map`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map>
 */
export function MAP(props?: MapElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "map",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
