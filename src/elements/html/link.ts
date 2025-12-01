/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * LinkElementProps are the props for the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link>
 */
export interface LinkElementProps extends GlobalAttributes {
  /**
   * `as` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#as>
   */
  as?: string | undefined;
  /**
   * `blocking` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#blocking>
   */
  blocking?: string | undefined;
  /**
   * `charset` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#charset>
   * @deprecated
   */
  charset?: string | undefined;
  /**
   * `crossorigin` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#crossorigin>
   */
  crossorigin?: string | undefined;
  /**
   * `disabled` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#disabled>
   */
  disabled?: string | boolean | undefined;
  /**
   * `fetchpriority` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#fetchpriority>
   */
  fetchpriority?: string | undefined;
  /**
   * `href` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#href>
   */
  href?: string | undefined;
  /**
   * `hreflang` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#hreflang>
   */
  hreflang?: string | undefined;
  /**
   * `imagesizes` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#imagesizes>
   */
  imagesizes?: string | undefined;
  /**
   * `imagesrcset` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#imagesrcset>
   */
  imagesrcset?: string | undefined;
  /**
   * `integrity` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#integrity>
   */
  integrity?: string | undefined;
  /**
   * `media` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#media>
   */
  media?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `rel` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#rel>
   */
  rel?: string | undefined;
  /**
   * `rev` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#rev>
   * @deprecated
   */
  rev?: string | undefined;
  /**
   * `sizes` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#sizes>
   */
  sizes?: string | undefined;
  /**
   * `target` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#target>
   * @deprecated
   */
  target?: string | undefined;
  /**
   * `type` is an attribute of the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#type>
   */
  type?: string | undefined;
}

/**
 * LINK renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link>
 */
export function LINK(props?: LinkElementProps): string {
  return renderElement("link", props as AnyProps, true);
}
