/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ImgElementProps are the props for the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img>
 */
export interface ImgElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `alt` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#alt>
   */
  alt?: string | undefined;
  /**
   * `attributionsrc` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#attributionsrc>
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `border` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#border>
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `decoding` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#decoding>
   */
  decoding?: string | undefined;
  /**
   * `fetchpriority` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#fetchpriority>
   */
  fetchpriority?: string | undefined;
  /**
   * `height` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#height>
   */
  height?: string | undefined;
  /**
   * `hspace` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#hspace>
   * @deprecated
   */
  hspace?: string | undefined;
  /**
   * `ismap` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#ismap>
   */
  ismap?: string | boolean | undefined;
  /**
   * `loading` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#loading>
   */
  loading?: string | undefined;
  /**
   * `longdesc` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#longdesc>
   * @deprecated
   */
  longdesc?: string | undefined;
  /**
   * `name` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#name>
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `sizes` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#sizes>
   */
  sizes?: string | undefined;
  /**
   * `src` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#src>
   */
  src?: string | undefined;
  /**
   * `srcset` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#srcset>
   */
  srcset?: string | undefined;
  /**
   * `usemap` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#usemap>
   */
  usemap?: string | undefined;
  /**
   * `vspace` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#vspace>
   * @deprecated
   */
  vspace?: string | undefined;
  /**
   * `width` is an attribute of the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img#width>
   */
  width?: string | undefined;
}

/**
 * IMG renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img>
 */
export function IMG(props?: ImgElementProps): string {
  return renderElement("img", props as AnyProps, true);
}
