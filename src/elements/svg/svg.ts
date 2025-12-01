/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SvgElementProps are the props for the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg>
 */
export interface SvgElementProps extends GlobalAttributes {
  /**
   * `baseProfile` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#baseProfile>
   * @deprecated
   */
  baseProfile?: string | undefined;
  /**
   * `height` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#height>
   */
  height?: string | undefined;
  /**
   * `preserveAspectRatio` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#preserveAspectRatio>
   */
  preserveAspectRatio?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `version` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#version>
   * @deprecated
   */
  version?: string | undefined;
  /**
   * `viewBox` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#viewBox>
   */
  viewBox?: string | undefined;
  /**
   * `width` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#width>
   */
  width?: string | undefined;
  /**
   * `x` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#x>
   */
  x?: string | undefined;
  /**
   * `y` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#y>
   */
  y?: string | undefined;
  /**
   * `zoomAndPan` is an attribute of the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg#zoomAndPan>
   * @deprecated
   */
  zoomAndPan?: string | undefined;
}

/**
 * SVG renders the [`svg`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/svg>
 */
export function SVG(props?: SvgElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "svg",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
