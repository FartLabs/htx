/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MetadataElementProps are the props for the [`metadata`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata>
 */
export interface MetadataElementProps extends GlobalAttributes {
}

/**
 * METADATA renders the [`metadata`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata>
 */
export function METADATA(
  props?: MetadataElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "metadata",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
