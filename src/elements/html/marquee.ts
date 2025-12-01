/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MarqueeElementProps are the props for the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee>
 * @deprecated
 */
export interface MarqueeElementProps extends GlobalAttributes {
  /**
   * `behavior` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#behavior>
   * @deprecated
   */
  behavior?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `direction` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#direction>
   * @deprecated
   */
  direction?: string | undefined;
  /**
   * `height` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#height>
   * @deprecated
   */
  height?: string | undefined;
  /**
   * `hspace` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#hspace>
   * @deprecated
   */
  hspace?: string | undefined;
  /**
   * `loop` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#loop>
   * @deprecated
   */
  loop?: string | boolean | undefined;
  /**
   * `scrollamount` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#scrollamount>
   * @deprecated
   */
  scrollamount?: string | undefined;
  /**
   * `scrolldelay` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#scrolldelay>
   * @deprecated
   */
  scrolldelay?: string | undefined;
  /**
   * `truespeed` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#truespeed>
   * @deprecated
   */
  truespeed?: string | boolean | undefined;
  /**
   * `vspace` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#vspace>
   * @deprecated
   */
  vspace?: string | undefined;
  /**
   * `width` is an attribute of the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * MARQUEE renders the [`marquee`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/marquee>
 * @deprecated
 */
export function MARQUEE(
  props?: MarqueeElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "marquee",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
