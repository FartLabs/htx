/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeTurbulenceElementProps are the props for the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence>
 */
export interface FeTurbulenceElementProps extends GlobalAttributes {
  /**
   * `baseFrequency` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#baseFrequency>
   */
  baseFrequency?: string | undefined;
  /**
   * `numOctaves` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#numOctaves>
   */
  numOctaves?: string | undefined;
  /**
   * `seed` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#seed>
   */
  seed?: string | undefined;
  /**
   * `stitchTiles` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#stitchTiles>
   */
  stitchTiles?: string | undefined;
  /**
   * `type` is an attribute of the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence#type>
   */
  type?: string | undefined;
}

/**
 * FE_TURBULENCE renders the [`feTurbulence`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feTurbulence>
 */
export function FE_TURBULENCE(
  props?: FeTurbulenceElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feTurbulence",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
