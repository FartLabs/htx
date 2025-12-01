/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TextPathElementProps are the props for the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath>
 */
export interface TextPathElementProps extends GlobalAttributes {
  /**
   * `fill` is an attribute of the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath#fill>
   */
  fill?: string | undefined;
  /**
   * `href` is an attribute of the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath#href>
   */
  href?: string | undefined;
  /**
   * `path` is an attribute of the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath#path>
   * @experimental
   */
  path?: string | undefined;
  /**
   * `side` is an attribute of the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath#side>
   * @experimental
   */
  side?: string | undefined;
  /**
   * `spacing` is an attribute of the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath#spacing>
   */
  spacing?: string | undefined;
  /**
   * `startOffset` is an attribute of the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath#startOffset>
   */
  startOffset?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `textLength` is an attribute of the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath#textLength>
   */
  textLength?: string | undefined;
}

/**
 * TEXT_PATH renders the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath>
 */
export function TEXT_PATH(
  props?: TextPathElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "textPath",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
