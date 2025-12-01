/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AElementProps are the props for the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a>
 */
export interface AElementProps extends GlobalAttributes {
  /**
   * `attributionsourceid` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#attributionsourceid>
   * @experimental
   */
  attributionsourceid?: string | undefined;
  /**
   * `attributionsrc` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#attributionsrc>
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `charset` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#charset>
   * @deprecated
   */
  charset?: string | undefined;
  /**
   * `coords` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#coords>
   * @deprecated
   */
  coords?: string | undefined;
  /**
   * `download` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#download>
   */
  download?: string | undefined;
  /**
   * `href` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#href>
   */
  href?: string | undefined;
  /**
   * `hreflang` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#hreflang>
   */
  hreflang?: string | undefined;
  /**
   * `hreftranslate` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#hreftranslate>
   * @experimental
   */
  hreftranslate?: string | undefined;
  /**
   * `interestfor` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#interestfor>
   * @experimental
   */
  interestfor?: string | undefined;
  /**
   * `name` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#name>
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `ping` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#ping>
   */
  ping?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `rel` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#rel>
   */
  rel?: string | undefined;
  /**
   * `rev` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#rev>
   * @deprecated
   */
  rev?: string | undefined;
  /**
   * `shape` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#shape>
   * @deprecated
   */
  shape?: string | undefined;
  /**
   * `target` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#target>
   */
  target?: string | undefined;
  /**
   * `type` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#type>
   */
  type?: string | undefined;
}

/**
 * A renders the [`a`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a>
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
