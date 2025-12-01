/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AElementProps are the props for the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a>
 */
export interface AElementProps extends GlobalAttributes {
  /**
   * `download` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#download>
   */
  download?: string | undefined;
  /**
   * `href` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#href>
   */
  href?: string | undefined;
  /**
   * `hreflang` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#hreflang>
   */
  hreflang?: string | undefined;
  /**
   * `interestfor` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#interestfor>
   * @experimental
   */
  interestfor?: string | undefined;
  /**
   * `ping` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#ping>
   */
  ping?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `rel` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#rel>
   */
  rel?: string | undefined;
  /**
   * `systemLanguage` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#systemLanguage>
   */
  systemLanguage?: string | undefined;
  /**
   * `target` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#target>
   */
  target?: string | undefined;
  /**
   * `type` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a#type>
   */
  type?: string | undefined;
}

/**
 * A renders the [`a`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/a>
 */
export function A(props?: AElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "a",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
