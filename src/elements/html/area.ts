/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AreaElementProps are the props for the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area>
 */
export interface AreaElementProps extends GlobalAttributes {
  /**
   * `alt` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#alt>
   */
  alt?: string | undefined;
  /**
   * `attributionsrc` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#attributionsrc>
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `coords` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#coords>
   */
  coords?: string | undefined;
  /**
   * `download` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#download>
   */
  download?: string | undefined;
  /**
   * `href` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#href>
   */
  href?: string | undefined;
  /**
   * `interestfor` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#interestfor>
   * @experimental
   */
  interestfor?: string | undefined;
  /**
   * `nohref` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#nohref>
   * @deprecated
   */
  nohref?: string | undefined;
  /**
   * `ping` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#ping>
   */
  ping?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `rel` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#rel>
   */
  rel?: string | undefined;
  /**
   * `shape` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#shape>
   */
  shape?: string | undefined;
  /**
   * `target` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area#target>
   */
  target?: string | undefined;
}

/**
 * AREA renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area>
 */
export function AREA(props?: AreaElementProps): string {
  return renderElement("area", props as AnyProps, true);
}
